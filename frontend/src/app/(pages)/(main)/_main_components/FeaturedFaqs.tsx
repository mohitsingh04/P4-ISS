"use client";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqItems = [
  {
    id: "q1",
    question: "How to book our custom treatments?",
    answer:
      "We are committed to providing our customers with exceptional service. You can easily book our custom treatments online through our website or by contacting our customer support. Our team is ready to assist you with your booking.",
  },
  {
    id: "q2",
    question: "Are there also sports massages?",
    answer:
      "Yes, we offer a range of sports massages performed by certified therapists. These massages are designed to help with muscle recovery, improve flexibility, and prepare your body for physical activity. You can find more details and book a session on our services page.",
  },
  {
    id: "q3",
    question: "How do you price your services?",
    answer:
      "Our pricing varies depending on the type of service, duration, and any additional customization. We offer competitive rates and various packages. Please refer to our pricing page for a detailed breakdown or contact us for a personalized quote.",
  },
  {
    id: "q4",
    question: "Can I book my appointment online?",
    answer:
      "Absolutely! Our online booking portal is available 24/7 for your convenience. Simply visit our website, select your desired service and time slot, and confirm your appointment. You will receive a confirmation email shortly after.",
  },
  {
    id: "q5",
    question: "Can I book home services?",
    answer:
      "Yes, we provide home services for select treatments to ensure your comfort and convenience. Please check our service area and availability on our website, or contact us directly to inquire about home service options in your location.",
  },
  {
    id: "q6",
    question: "What are included in your services?",
    answer:
      "Our comprehensive services include a variety of yoga classes (beginner to advanced), meditation sessions, personalized wellness programs, dietary consultations, and specialized workshops. Each service is designed to promote holistic well-being.",
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
                      className="text-purple-600"
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
