import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import sanitizeHtml from "sanitize-html";

import Header from "../../components/Header";
import {
    getPostBySlug,
    getPostExcerpt,
    getPostImage,
} from "../../lib/blogger";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

function sanitizeBlogContent(content: string): string {
    return sanitizeHtml(content, {
        allowedTags: [
            "a",
            "article",
            "b",
            "blockquote",
            "br",
            "caption",
            "code",
            "col",
            "colgroup",
            "div",
            "em",
            "figcaption",
            "figure",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "hr",
            "i",
            "iframe",
            "img",
            "kbd",
            "li",
            "ol",
            "p",
            "pre",
            "section",
            "small",
            "span",
            "strong",
            "sub",
            "sup",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr",
            "u",
            "ul",
        ],
        allowedAttributes: {
            a: [
                "href",
                "name",
                "rel",
                "target",
                "title",
            ],
            iframe: [
                "allow",
                "allowfullscreen",
                "frameborder",
                "height",
                "loading",
                "referrerpolicy",
                "src",
                "title",
                "width",
            ],
            img: [
                "alt",
                "height",
                "loading",
                "src",
                "srcset",
                "title",
                "width",
            ],
            "*": [
                "class",
                "colspan",
                "data-*",
                "rowspan",
            ],
        },
        allowedIframeHostnames: [
            "www.youtube.com",
            "www.youtube-nocookie.com",
            "youtube.com",
            "player.vimeo.com",
        ],
        allowedSchemes: [
            "http",
            "https",
            "mailto",
        ],
        allowProtocolRelative: false,
        disallowedTagsMode: "completelyDiscard",
    });
}

function formatDate(date: string | undefined): string {
    if (!date) {
        return "";
    }

    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

function getAuthorName(post: {
    author?: {
        displayName?: string;
    };
}): string {
    return post.author?.displayName || "Vijay Rami";
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const description = getPostExcerpt(post.content, 160);
    const image = getPostImage(post);
    const canonicalUrl = `${SITE_URL}/blog/${slug}`;
    const authorName = getAuthorName(post);

    return {
        title: post.title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        authors: [
            {
                name: authorName,
            },
        ],
        keywords: post.labels,
        openGraph: {
            type: "article",
            title: post.title,
            description,
            url: canonicalUrl,
            siteName: "Vijay Rami",
            locale: "en_US",
            publishedTime: post.published,
            modifiedTime: post.updated,
            authors: [authorName],
            tags: post.labels,
            images: image
                ? [
                      {
                          url: image,
                          alt: post.title,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: image
                ? "summary_large_image"
                : "summary",
            title: post.title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const content = post.content
        ? sanitizeBlogContent(post.content)
        : "";

    const featuredImage = getPostImage(post);
    const authorName = getAuthorName(post);
    const canonicalUrl = `${SITE_URL}/blog/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
        },
        headline: post.title,
        description: getPostExcerpt(
            post.content,
            160,
        ),
        url: canonicalUrl,
        datePublished: post.published,
        dateModified:
            post.updated || post.published,
        author: {
            "@type": "Person",
            name: authorName,
            url: SITE_URL,
        },
        publisher: {
            "@type": "Person",
            name: "Vijay Rami",
            url: SITE_URL,
        },
        image: featuredImage
            ? [featuredImage]
            : undefined,
        keywords: post.labels?.join(", "),
    };

    return (
        <>
            <Header />

            <main className="min-h-screen">
                <article className="mx-auto max-w-4xl px-6 py-12">
                    <nav
                        className="mb-8"
                        aria-label="Blog navigation"
                    >
                        <Link
                            href="/blog"
                            className="text-sm font-medium text-blue-600 hover:underline"
                        >
                            ← Back to Blog
                        </Link>
                    </nav>

                    <header className="mb-10">
                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                            {post.title}
                        </h1>

                        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                            <span>
                                By {authorName}
                            </span>

                            {post.published && (
                                <time dateTime={post.published}>
                                    {formatDate(
                                        post.published,
                                    )}
                                </time>
                            )}

                            {post.updated &&
                                post.updated !==
                                    post.published && (
                                    <span>
                                        Updated{" "}
                                        {formatDate(
                                            post.updated,
                                        )}
                                    </span>
                                )}
                        </div>

                        {post.labels &&
                            post.labels.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.labels.map(
                                        (label) => (
                                            <span
                                                key={label}
                                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                                            >
                                                {label}
                                            </span>
                                        ),
                                    )}
                                </div>
                            )}
                    </header>

                    {featuredImage && (
                        <figure className="mb-10">
                            <img
                                src={featuredImage}
                                alt={post.title}
                                className="h-auto w-full rounded-xl object-cover"
                            />
                        </figure>
                    )}

                    <div
                        className="blog-content max-w-none text-base leading-7 text-gray-800"
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    />

                    <footer className="mt-12 border-t pt-8">
                        <Link
                            href="/blog"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            ← Back to all articles
                        </Link>
                    </footer>
                </article>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            jsonLd,
                        ),
                    }}
                />
            </main>
        </>
    );
}