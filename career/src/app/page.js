"use client";
import HomeClient from "../components/home/HomeClient";
import React, { Suspense } from "react";
import Loading from "../components/Loading/Loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeClient />
    </Suspense>
  );
}
