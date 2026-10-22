"use client";

import { useEffect } from "react";

const SYNTAX_HIGHLIGHTER_BASE =
    "https://cdnjs.cloudflare.com/ajax/libs/SyntaxHighlighter/3.0.83";

const BRUSHES = [
    "shBrushCpp.min.js",
    "shBrushCSharp.min.js",
    "shBrushCss.min.js",
    "shBrushJava.min.js",
    "shBrushJScript.min.js",
    "shBrushPhp.min.js",
    "shBrushPython.min.js",
    "shBrushRuby.min.js",
    "shBrushSql.min.js",
    "shBrushVb.min.js",
    "shBrushXml.min.js",
    "shBrushPerl.min.js",
];

declare global {
    interface Window {
        SyntaxHighlighter?: {
            all: () => void;
        };
    }
}

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(
            `script[src="${src}"]`,
        );

        if (existingScript) {
            resolve();
            return;
        }

        const script = document.createElement("script");

        script.src = src;
        script.async = false;

        script.onload = () => resolve();
        script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));

        document.head.appendChild(script);
    });
}

export default function SyntaxHighlighter(): null {
    useEffect(() => {
        let cancelled = false;

        const initializeSyntaxHighlighter = async (): Promise<void> => {
            try {
                await loadScript(
                    `${SYNTAX_HIGHLIGHTER_BASE}/scripts/shCore.min.js`,
                );

                for (const brush of BRUSHES) {
                    await loadScript(
                        `${SYNTAX_HIGHLIGHTER_BASE}/scripts/${brush}`,
                    );
                }

                if (!cancelled && window.SyntaxHighlighter) {
                    window.SyntaxHighlighter.all();
                }
            } catch (error) {
                console.error(
                    "Unable to initialize SyntaxHighlighter.",
                    error,
                );
            }
        };

        initializeSyntaxHighlighter();

        return () => {
            cancelled = true;
        };
    }, []);

    return null;
}