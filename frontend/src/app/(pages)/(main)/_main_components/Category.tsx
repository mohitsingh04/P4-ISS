"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuLaptop, LuSchool, LuLandmark, LuStore } from "react-icons/lu";
import { cardVariants } from "@/contexts/varients";
import { CategoryItem, ColorKey } from "@/types/types";
import Link from "next/link";

type CSSVariableStyle = React.CSSProperties & {
  [key: `--${string}`]: string;
};

const colorClasses: Record<
  ColorKey,
  { bg: string; icon: string; button: string }
> = {
  blue: {
    bg: "bg-[#e6f0fa]",
    icon: "text-blue-700",
    button: "bg-blue-700 text-white hover:bg-blue-800",
  },
  green: {
    bg: "bg-[#e6f9f0]",
    icon: "text-green-700",
    button: "bg-green-700 text-white hover:bg-green-800",
  },
  indigo: {
    bg: "bg-[#f1e6fa]",
    icon: "text-indigo-700",
    button: "bg-indigo-700 text-white hover:bg-indigo-800",
  },
  orange: {
    bg: "bg-[#fff2e5]",
    icon: "text-orange-700",
    button: "bg-orange-700 text-white hover:bg-orange-800",
  },
};

// Categories data
const categories: CategoryItem[] = [
  {
    icon: LuLaptop,
    title: "Online Coaching",
    link: "online-coaching",
    description:
      "Prepare for Sainik School & RIMC entrance from home with expert mentors.",
    linkText: "Explore Online Coaching",
    color: "blue",
  },
  {
    icon: LuSchool,
    title: "Schools",
    link: "schools",
    description:
      "Browse top schools including Sainik Schools and military institutions.",
    linkText: "List of Schools",
    color: "green",
  },
  {
    icon: LuLandmark,
    title: "RIMC & Military Colleges",
    link: "military-colleges",
    description:
      "Explore RIMC, Rashtriya Military Schools, and other defence academies.",
    linkText: "Explore Military Colleges",
    color: "indigo",
  },
  {
    icon: LuStore,
    title: "Training Centers",
    link: "training-centers",
    description:
      "Join defence exam coaching centers for Sainik School & RIMC preparation.",
    linkText: "List of Training Centers",
    color: "orange",
  },
];

export default function Category() {
  return (
    <section className="py-20 px-4 sm:px-10 md:px-20 bg-gray-50">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2 leading-snug tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Discover Our <span className="text-indigo-600">Categories</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 text-center mx-auto mb-12 text-sm sm:text-base"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore preparation options tailored to your goals — from live online
        classes to India’s top Sainik Schools and RIMC.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, index) => {
          const styles = colorClasses[cat.color];

          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flipCardHover rounded-2xl p-6 transition-all duration-300 group ${styles.bg}`}
              style={{ "--bg-color": cat.color } as CSSVariableStyle}
            >
              <div className="flex items-center justify-between mb-4">
                <cat.icon size={40} className={styles.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {cat.description}
              </p>
              <Link
                href={`/institutes?category=${cat?.link}`}
                className="text-sm font-medium underline text-gray-700 hover:text-black transition"
              >
                {cat.linkText}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
