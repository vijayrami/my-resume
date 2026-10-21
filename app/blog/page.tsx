import Header from "../components/Header";
import Link from "next/link";

import {
    getPaginatedPosts,
    getPostExcerpt,
    getPostImage,
    getPostSlug,
} from "../lib/blogger";

interface BlogPageProps {
    searchParams: Promise<{
        page?: string;
    }>;
}

const POSTS_PER_PAGE = 9;

export default async function BlogPage({
    searchParams,
}: BlogPageProps) {
    const params = await searchParams;

    const requestedPage = Number.parseInt(params.page ?? "1", 10);
    const currentPage =
        Number.isFinite(requestedPage) && requestedPage > 0
            ? requestedPage
            : 1;

    const {
        items: posts,
        page,
        totalPages,
    } = await getPaginatedPosts(
        currentPage,
        POSTS_PER_PAGE,
    );

    if (currentPage > totalPages && totalPages > 0) {
        return (
            <>
                <Header />

                <main className="mx-auto max-w-6xl px-6 py-12">
                    <h1 className="mb-4 text-4xl font-bold">
                        Blog
                    </h1>

                    <p className="mb-6 text-gray-600">
                        The requested page does not exist.
                    </p>

                    <Link
                        href="/blog"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="mx-auto max-w-6xl px-6 py-12">
                <header className="mb-10">
                    <h1 className="mb-3 text-4xl font-bold">
                        Blog
                    </h1>

                    <p className="text-gray-600">
                        Magento, Adobe Commerce, PHP, JavaScript
                        and development articles.
                    </p>
                </header>

                {posts.length === 0 ? (
                    <p className="text-gray-600">
                        No published articles found.
                    </p>
                ) : (
                    <>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => {
                                const image = getPostImage(post);
                                const excerpt = getPostExcerpt(
                                    post.content,
                                );
                                const slug = getPostSlug(post);

                                return (
                                    <article
                                        key={post.id}
                                        className="overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        {image && (
                                            <img
                                                src={image}
                                                alt={post.title}
                                                className="h-52 w-full object-cover"
                                                loading="lazy"
                                            />
                                        )}

                                        <div className="p-6">
                                            {post.published && (
                                                <time
                                                    dateTime={
                                                        post.published
                                                    }
                                                    className="text-sm text-gray-500"
                                                >
                                                    {new Intl.DateTimeFormat(
                                                        "en-IN",
                                                        {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        },
                                                    ).format(
                                                        new Date(
                                                            post.published,
                                                        ),
                                                    )}
                                                </time>
                                            )}

                                            <h2 className="mt-2 mb-3 text-xl font-semibold leading-tight">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="hover:text-blue-600"
                                                >
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            {post.labels &&
                                                post.labels.length > 0 && (
                                                    <div className="mb-4 flex flex-wrap gap-2">
                                                        {post.labels.map(
                                                            (label) => (
                                                                <span
                                                                    key={
                                                                        label
                                                                    }
                                                                    className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                                                                >
                                                                    {label}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                )}

                                            <p className="text-sm leading-6 text-gray-600">
                                                {excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${slug}`}
                                                className="mt-5 inline-block font-medium text-blue-600 hover:underline"
                                            >
                                                Read article →
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {totalPages > 1 && (
                            <nav
                                className="mt-12 flex items-center justify-center gap-2"
                                aria-label="Blog pagination"
                            >
                                {page > 1 && (
                                    <Link
                                        href={
                                            page === 2
                                                ? "/blog"
                                                : `/blog?page=${page - 1}`
                                        }
                                        className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                                    >
                                        ← Previous
                                    </Link>
                                )}

                                <span className="px-4 py-2 text-sm text-gray-600">
                                    Page {page} of {totalPages}
                                </span>

                                {page < totalPages && (
                                    <Link
                                        href={`/blog?page=${page + 1}`}
                                        className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                                    >
                                        Next →
                                    </Link>
                                )}
                            </nav>
                        )}
                    </>
                )}
            </main>
        </>
    );
}