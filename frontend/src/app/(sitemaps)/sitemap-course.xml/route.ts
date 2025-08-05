import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { CourseProps } from "@/types/types";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let allCourse = [];
  try {
    const response = await API.get("/course", { headers: { origin: baseUrl } });
    allCourse = response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
  }

  const courseRoutes = allCourse.map(
    (post: CourseProps) =>
      `/course/${encodeURIComponent(generateSlug(post.course_name))}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${courseRoutes
  .map(
    (route: string) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
