import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { ExamProps } from "@/types/types";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let allExam = [];
  try {
    const response = await API.get("/exam", { headers: { origin: baseUrl } });
    allExam = response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
  }

  const examRoutes = allExam.map(
    (post: ExamProps) =>
      `/exam/${encodeURIComponent(generateSlug(post.exam_name))}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${examRoutes
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
