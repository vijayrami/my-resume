const BLOGGER_API_BASE_URL = "https://www.googleapis.com/blogger/v3";

const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY;
const BLOGGER_BLOG_URL = process.env.BLOGGER_BLOG_URL;

const BLOGGER_REVALIDATE_SECONDS = 300;

export interface BloggerImage {
    url?: string;
}

export interface BloggerAuthor {
    displayName?: string;
    url?: string;
    image?: BloggerImage;
}

export interface BloggerPost {
    id: string;
    title: string;
    content?: string;
    published?: string;
    updated?: string;
    url?: string;
    selfLink?: string;
    labels?: string[];
    images?: BloggerImage[];
    author?: BloggerAuthor;
    status?: string;
}

interface BloggerBlog {
    id: string;
    name?: string;
    description?: string;
    url?: string;
    posts?: {
        totalItems?: number;
    };
}

interface BloggerPostsResponse {
    items?: BloggerPost[];
    nextPageToken?: string;
    prevPageToken?: string;
}

interface BloggerApiError {
    error?: {
        code?: number;
        message?: string;
    };
}

interface GetPostsOptions {
    maxResults?: number;
    pageToken?: string;
    label?: string;
    fetchBodies?: boolean;
    fetchImages?: boolean;
    blogId?: string;
}

function getRequiredEnvironmentVariable(
    name: string,
    value: string | undefined,
): string {
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

function buildUrl(
    endpoint: string,
    params: Record<string, string | number | boolean | undefined>,
): string {
    const url = new URL(`${BLOGGER_API_BASE_URL}/${endpoint}`);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.set(key, String(value));
        }
    });

    return url.toString();
}

async function bloggerFetch<T>(url: string): Promise<T> {
    const response = await fetch(url, {
        next: {
            revalidate: BLOGGER_REVALIDATE_SECONDS,
        },
    });

    if (!response.ok) {
        let errorMessage = `Blogger API request failed with status ${response.status}.`;

        try {
            const errorData = (await response.json()) as BloggerApiError;

            if (errorData.error?.message) {
                errorMessage = errorData.error.message;
            }
        } catch {
            // Keep the default error message.
        }

        throw new Error(errorMessage);
    }

    return response.json() as Promise<T>;
}

async function getBlog(): Promise<BloggerBlog> {
    const apiKey = getRequiredEnvironmentVariable(
        "BLOGGER_API_KEY",
        BLOGGER_API_KEY,
    );

    const blogUrl = getRequiredEnvironmentVariable(
        "BLOGGER_BLOG_URL",
        BLOGGER_BLOG_URL,
    );

    const url = buildUrl("blogs/byurl", {
        url: blogUrl,
        key: apiKey,
    });

    return bloggerFetch<BloggerBlog>(url);
}

export async function getPosts(
    options: GetPostsOptions = {},
): Promise<BloggerPostsResponse> {
    const apiKey = getRequiredEnvironmentVariable(
        "BLOGGER_API_KEY",
        BLOGGER_API_KEY,
    );

    const blogId = options.blogId ?? (await getBlog()).id;

    const url = buildUrl(`blogs/${blogId}/posts`, {
        key: apiKey,
        status: "live",
        orderBy: "published",
        fetchBodies: options.fetchBodies ?? true,
        fetchImages: options.fetchImages ?? true,
        maxResults: options.maxResults ?? 12,
        pageToken: options.pageToken,
        labels: options.label,
    });

    return bloggerFetch<BloggerPostsResponse>(url);
}

export interface PaginatedPosts {
    items: BloggerPost[];
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

export async function getPaginatedPosts(
    page = 1,
    pageSize = 9,
): Promise<PaginatedPosts> {
    const normalizedPage = Math.max(1, page);
    const normalizedPageSize = Math.max(1, Math.min(pageSize, 100));

    const blog = await getBlog();

    let pageToken: string | undefined;
    let response: BloggerPostsResponse = {};

    for (
        let currentPage = 1;
        currentPage <= normalizedPage;
        currentPage++
    ) {
        response = await getPosts({
            blogId: blog.id,
            maxResults: normalizedPageSize,
            pageToken,
        });

        if (currentPage === normalizedPage) {
            break;
        }

        pageToken = response.nextPageToken;

        if (!pageToken) {
            break;
        }
    }

    const totalItems = blog.posts?.totalItems ?? 0;
    const totalPages = Math.max(
        1,
        Math.ceil(totalItems / normalizedPageSize),
    );

    return {
        items: response.items ?? [],
        page: normalizedPage,
        pageSize: normalizedPageSize,
        totalItems,
        totalPages,
    };
}

export async function getPostBySlug(
    slug: string,
): Promise<BloggerPost | null> {
    let pageToken: string | undefined;

    do {
        const response = await getPosts({
            maxResults: 100,
            pageToken,
        });

        const post = response.items?.find(
            (item) => getPostSlug(item) === slug,
        );

        if (post) {
            return post;
        }

        pageToken = response.nextPageToken;
    } while (pageToken);

    return null;
}

export async function getAllPosts(): Promise<BloggerPost[]> {
    const posts: BloggerPost[] = [];
    let pageToken: string | undefined;

    do {
        const response = await getPosts({
            maxResults: 100,
            pageToken,
            fetchBodies: false,
            fetchImages: false,
        });

        posts.push(...(response.items ?? []));
        pageToken = response.nextPageToken;
    } while (pageToken);

    return posts;
}

export async function getPostById(postId: string): Promise<BloggerPost> {
    const apiKey = getRequiredEnvironmentVariable(
        "BLOGGER_API_KEY",
        BLOGGER_API_KEY,
    );

    const blog = await getBlog();

    const url = buildUrl(`blogs/${blog.id}/posts/${postId}`, {
        key: apiKey,
        fetchBody: true,
        fetchImages: true,
    });

    return bloggerFetch<BloggerPost>(url);
}

export function createSlug(title: string): string {
    return title
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function getPostSlug(post: BloggerPost): string {
    return createSlug(post.title);
}

export function getPostImage(post: BloggerPost): string | null {
    return post.images?.[0]?.url ?? null;
}

export function getPostExcerpt(
    content: string | undefined,
    maxLength = 180,
): string {
    if (!content) {
        return "";
    }

    const text = content
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'")
        .replace(/\s+/g, " ")
        .trim();

    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength).trimEnd()}...`;
}