import { redirect } from "next/navigation";
import CompareProperties from "./CompareProperties";

export default async function ComparePage({
  params,
}: {
  params: Promise<{ compare_slug: string }>;
}) {
  const { compare_slug } = await params;

  let slugsArray: string[] = [];

  if (compare_slug && compare_slug !== "select") {
    slugsArray = compare_slug.split("-vs-");

    if (slugsArray.length > 3) {
      const trimmedSlugs = slugsArray.slice(0, 3);
      const newSlug = trimmedSlugs.join("-vs-");

      redirect(`/compare/${newSlug}`);
    }
  }

  return <CompareProperties slugs={slugsArray} />;
}
