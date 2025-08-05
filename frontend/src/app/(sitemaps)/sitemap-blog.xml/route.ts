import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { BlogsProps } from "@/types/types";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let allBlogs = [];
  try {
    const response = await API.get("/blog", {
      headers: { origin: baseUrl },
    });
    allBlogs = response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
  }

  const blogRoutes = allBlogs.map(
    (post: BlogsProps) =>
      `/blog/${encodeURIComponent(generateSlug(post.title))}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogRoutes
  .map(
    (route: string) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
