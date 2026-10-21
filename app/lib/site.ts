const siteUrl = process.env.NEXT_SITE_URL;

if (!siteUrl) {
    throw new Error("NEXT_SITE_URL is not configured.");
}

export const SITE_URL: string = siteUrl;