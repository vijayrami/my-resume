'use client';

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';

interface FadeInSectionProps {
    children: ReactNode;
    className?: string;
}

export default function FadeInSection({
    children,
    className = '',
}: FadeInSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        const handleViewportChange = () => {
            setIsDesktop(mediaQuery.matches);
        };

        handleViewportChange();

        mediaQuery.addEventListener('change', handleViewportChange);

        return () => {
            mediaQuery.removeEventListener('change', handleViewportChange);
        };
    }, []);

    useEffect(() => {
        // Mobile: render immediately without lazy loading.
        if (!isDesktop) {
            setIsVisible(true);

            return;
        }

        const element = sectionRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px 0px',
                threshold: 0,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [isDesktop]);

    return (
        <div
            ref={sectionRef}
            className={`${className} ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
            } transition-all duration-700 ease-out`}
        >
            {children}
        </div>
    );
}