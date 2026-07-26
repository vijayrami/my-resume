"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
    value: string; // e.g. "40+", "98%", "4×"
}

export default function AnimatedCounter({ value }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState("0");

    const numericPart = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1200;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = numericPart / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= numericPart) {
                setDisplay(numericPart + suffix);
                clearInterval(timer);
            } else {
                setDisplay(Math.floor(start) + suffix);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, numericPart, suffix]);

    return (
        <motion.h2 ref={ref} style={{ margin: 0, fontSize: "2.5rem" }}>
            {display}
        </motion.h2>
    );
}