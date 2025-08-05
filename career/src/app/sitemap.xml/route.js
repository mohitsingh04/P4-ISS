import { API } from "../../context/API";

export async function GET(req) {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

  let jobs = [];

  try {
    const [hiringResponse, propertyResponse, locationResponse] =
      await Promise.all([
        API.get("/hiring"),
        API.get("/property"),
        API.get("/locations"),
      ]);

    const hiringData = hiringResponse.data;
    const propertyData = propertyResponse.data;
    const locationData = locationResponse.data;

    const propertyMap = propertyData.reduce((acc, property) => {
      acc[property.uniqueId] = property;
      return acc;
    }, {});

    const locationMap = locationData.reduce((acc, location) => {
      acc[location.property_id] = location;
      return acc;
    }, {});

    const enrichedHiringData = hiringData.map((hiring) => ({
      ...hiring,
      property_name: propertyMap[hiring.property_id]?.property_name || null,
      property_address:
        locationMap[hiring.property_id]?.property_address || null,
      property_city: locationMap[hiring.property_id]?.property_city || null,
      property_state: locationMap[hiring.property_id]?.property_state || null,
      property_country:
        locationMap[hiring.property_id]?.property_country || null,
      property_logo: propertyMap[hiring.property_id]?.property_logo || null,
    }));

    jobs = enrichedHiringData.filter((job) => job.status === "Active");
  } catch (error) {
    console.error("Error generating job sitemap:", error);
  }

  const staticRoutes = [{ loc: "", changefreq: "weekly", priority: 1.0 }];

  const jobRoutes = jobs.map((job) => {
    const slug = job.title
      ?.toLowerCase()
      ?.replace(/[^a-z0-9\s-]/g, "")
      ?.replace(/\s+/g, "-")
      ?.replace(/-+/g, "-");

    return {
      loc: `/${encodeURIComponent(slug)}/${encodeURIComponent(job._id)}`,
      changefreq: "weekly",
      priority: 0.9,
    };
  });

  const allRoutes = [...staticRoutes, ...jobRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
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
