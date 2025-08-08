import { ReactNode } from "react";
import API from "@/contexts/API";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AxiosError } from "axios";

export const dynamic = "force-dynamic";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

function extractKeywords(keywordObjects: { value?: string }[] = []): string[] {
  return keywordObjects
    .map((k) => k?.value?.trim())
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .slice(0, 2);
}

function stripHtml(html: string): string {
  return html?.replace(/<[^>]+>/g, "").trim() || "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ property_slug: string }>;
}): Promise<Metadata> {
  const { property_slug } = await params;
  let property = null;
  let seo = null;

  try {
    const res = await API.get(`/property/slug/${property_slug}`, {
      headers: { origin: BASE_URL },
    });
    property = res.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    console.log(err.response?.data.error);
    if (err?.response?.data?.error === "Property not found.") {
      notFound();
    }
  }
  if (property?.uniqueId) {
    try {
      const seoRes = await API.get(`/seo/property/${property.uniqueId}`, {
        headers: { origin: BASE_URL },
      });
      seo = seoRes.data;
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      if (err.response?.status !== 404) {
        console.error("Error loading SEO:", err.response?.data?.error);
      }
      // Skip SEO if not found
      seo = null;
    }
  }

  if (!property) {
    return { title: "Property Not Found" };
  }

  const keywords = extractKeywords(seo?.primary_focus_keyword);

  return {
    title: property.property_name,
    description: stripHtml(seo?.meta_description) || undefined,
    keywords,
    alternates: {
      canonical: `${BASE_URL}/${property.property_slug}`,
    },
    openGraph: {
      title: property.property_name,
      description: stripHtml(seo?.meta_description) || undefined,
      images: property.featured_image?.[0]
        ? [
            {
              url: `${MEDIA_URL}/${property.featured_image[0]}`,
              alt: property.property_name || "Property Image",
            },
          ]
        : undefined,
    },
    other: seo?.json_schema
      ? {
          "structured-data": JSON.stringify(seo.json_schema),
        }
      : undefined,
  };
}

export default function PropertyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
