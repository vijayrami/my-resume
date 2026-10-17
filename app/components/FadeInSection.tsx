'use client';

import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type ReactNode,
} from 'react';

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeInSection({
    children,
    delay = 0,
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
        // Wait until the viewport type has been determined.
        if (isDesktop === null) {
            return;
        }

        // Mobile/tablet: render immediately.
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

    const style: CSSProperties = {
        transitionDelay: `${delay}s`,
    };

    return (
        <div
            ref={sectionRef}
            className={`${className} transition-all duration-700 ease-out ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-5 opacity-0'
            }`}
            style={style}
        >
            {children}
        </div>
    );
}