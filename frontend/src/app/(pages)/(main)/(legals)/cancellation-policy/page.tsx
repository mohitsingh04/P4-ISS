"use client";
import React, { useCallback, useEffect, useState } from "react";
import { LuLock } from "react-icons/lu";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import API from "@/contexts/API";

const CancellationPolicy = () => {
  const [cancellation, setCancellation] = useState<string | null>(null);

  const getCancellation = useCallback(async () => {
    try {
      const response = await API.get(`/legal`);
      setCancellation(response.data.cancelationPolicy);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCancellation();
  }, [getCancellation]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Cancellation Policy" }]} />
      </div>

      {cancellation ? (
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          dangerouslySetInnerHTML={{ __html: cancellation }}
        />
      ) : (
        <div className="flex-grow px-6 py-16 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white to-indigo-50">
          <LuLock size={80} className="text-indigo-600 mb-6" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-indigo-900">
            Policy Coming Soon
          </h2>
          <p className="text-gray-600 max-w-xl">
            We&apos;re currently working hard to prepare this policy for you. Please
            check back soon. Once the policy is available, you’ll receive an
            email notification to stay informed.
          </p>
        </div>
      )}
    </div>
  );
};

export default CancellationPolicy;
