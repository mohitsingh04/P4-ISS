import PropertiesLoader from "@/components/Loader/Property/PropertiesLoader";
import { ReactNode, Suspense } from "react";

export default function PropertyLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PropertiesLoader />}>{children}</Suspense>;
}
