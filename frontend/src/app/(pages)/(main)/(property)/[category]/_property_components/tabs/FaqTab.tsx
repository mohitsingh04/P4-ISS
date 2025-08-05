"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaqProps } from "@/types/types";

const FAQTab = ({ faqs }: { faqs: FaqProps[] }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our institute
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-2">
        {faqs?.map((faq, index) => {
          const isOpen = openFAQ === index;

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-purple-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left hover:bg-purple-50 cursor-pointer transition-colors focus:outline-none focus:bg-purple-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>

                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isOpen ? (
                      <LuMinus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <LuPlus className="w-5 h-5 text-purple-600" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="faq-content"
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 500, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      overflow: "hidden",
                      willChange: "max-height, opacity",
                    }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-700 mb-4">
          Our team is here to help you with any additional questions you may
          have.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Contact Us
        </button>
      </div> */}
    </div>
  );
};

export default FAQTab;
