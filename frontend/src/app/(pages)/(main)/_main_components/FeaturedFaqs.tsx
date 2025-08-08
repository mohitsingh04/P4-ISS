"use client";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqItems = [
  {
    id: "q1",
    question: "How to apply for Sainik School or RIMC?",
    answer:
      "You can apply online through the official website of the respective institution or via the National Testing Agency (NTA) portal where applicable. We also provide guidance and resources to help you with the application process.",
  },
  {
    id: "q2",
    question: "Do you offer coaching for entrance exams?",
    answer:
      "Yes, we offer specialized coaching for Sainik School, RIMC, and Rashtriya Military School entrance exams. Our expert faculty focuses on syllabus coverage, mock tests, and interview preparation.",
  },
  {
    id: "q3",
    question: "How much does the training cost?",
    answer:
      "The cost depends on the course duration, format (online or offline), and additional facilities like hostel or study material. Please check our fee structure page or contact us for a personalized quote.",
  },
  {
    id: "q4",
    question: "Can I register for classes online?",
    answer:
      "Absolutely! You can register online by filling out the enrollment form on our website. Choose your preferred course, pay the registration fee, and you will receive confirmation with further instructions.",
  },
  {
    id: "q5",
    question: "Do you provide hostel facilities?",
    answer:
      "Yes, selected training centers and schools provide hostel accommodation for students. Facilities include meals, study rooms, and round-the-clock supervision. Please verify availability before applying.",
  },
  {
    id: "q6",
    question: "What services do you offer?",
    answer:
      "Our services include entrance exam coaching, interview preparation, study materials, mock tests, personality development, and guidance for admission into Sainik Schools, RIMC, and military training institutions.",
  },
];

export default function FeaturedFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pb-32 px-4 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full mt-16 max-w-md aspect-[1/1]">
            <Image
              src="/images/faq.png"
              alt="FAQ Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ id, question, answer }) => {
              const isOpen = openId === id;
              return (
                <motion.div key={id} layout initial={{ borderRadius: 8 }}>
                  <button
                    onClick={() => toggleFaq(id)}
                    className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-lg text-gray-800"
                  >
                    <span>{question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-indigo-600"
                    >
                      {!isOpen ? <LuPlus size={24} /> : <LuMinus />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-6 overflow-hidden"
                      >
                        <div className="py-2 text-gray-600">
                          <p className="text-base leading-relaxed">{answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
