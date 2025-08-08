"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import API from "@/contexts/API";
import {
  formatDateTime,
  generateSlug,
  stripHtmlAndLimit,
} from "@/contexts/Callbacks";
import { AdminProps, BlogsProps } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);
  const [authors, setAuthors] = useState<AdminProps[]>([]);

  const getBlogs = useCallback(async () => {
    try {
      const [blogRes, authorRes] = await Promise.all([
        API.get(`/blog`),
        API.get(`/users`),
      ]);
      setBlogs(blogRes?.data);
      setAuthors(authorRes?.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);
  const getAuthorById = (id: number) => {
    const author = authors?.find(
      (item) => Number(item?.uniqueId) === Number(id)
    );
    return author?.name;
  };
  return (
    <section className="pt-10 pb-40 px-4 sm:px-8 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          Recent <span className="text-indigo-600">Blog</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Photography spots in {"India`s"} most breathtaking travel
          destinations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs?.slice(0, 6)?.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white border border-gray-100  rounded-lg overflow-hidden group hover:shadow-sm transition duration-300"
          >
            <div className="relative">
              <Link
                href={`/blog/${generateSlug(blog?.title)}`}
                className="group block"
              >
                <div className="relative w-full h-64 cursor-pointer overflow-hidden">
                  <Image
                    src={
                      blog?.featured_image?.[0]
                        ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/blogs/${blog?.featured_image?.[0]}`
                        : "/images/property_banner.webp"
                    }
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-center px-3 py-2 rounded">
                <div className="text-lg font-bold">
                  {formatDateTime(blog?.createdAt)?.day}
                </div>
                <div className="text-xs uppercase">
                  {formatDateTime(blog?.createdAt)?.month}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <FiUser className="text-indigo-600" />
                  {getAuthorById(blog?.author)}
                </span>
              </div>
              <Link href={`/blog/${generateSlug(blog?.title)}`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600">
                {stripHtmlAndLimit(blog?.blog, 80)}
              </p>
              <Link
                href={`/blog/${generateSlug(blog?.title)}`}
                className="mt-4 cursor-pointer inline-block px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
