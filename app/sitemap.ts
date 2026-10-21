import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

import {
    getAllPosts,
    getPostSlug,
} from "./lib/blogger";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${SITE_URL}/projects`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            priority: 0.9,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_URL}/blog/${getPostSlug(post)}`,
        lastModified: post.updated
            ? new Date(post.updated)
            : post.published
              ? new Date(post.published)
              : new Date(),
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...blogPages,
    ];
}