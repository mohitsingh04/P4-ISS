import API from "@/contexts/API";
import { generateSlug } from "@/contexts/Callbacks";
import { CategoryProps, PropertyProps } from "@/types/types";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let allProperties = [];
  let allCategory = [];
  try {
    const response = await API.get("/property", {
      headers: { origin: baseUrl },
    });
    allProperties = response.data;
    const catRes = await API.get("/category", {
      headers: { origin: baseUrl },
    });
    allCategory = catRes.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
  }

  const getCategoryById = (id: string) => {
    const cat = allCategory.find(
      (item: CategoryProps) => item.uniqueId === Number(id)
    );
    return cat.category_name;
  };

  const propertyRoutes = allProperties.map(
    (post: PropertyProps) =>
      `/${encodeURIComponent(
        generateSlug(getCategoryById(post.category))
      )}/${encodeURIComponent(post.property_slug)}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${propertyRoutes
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
