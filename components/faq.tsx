"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What fitness programs do you offer?",
    answer:
      "We offer a wide range of programs including personal training, group fitness classes, yoga, strength training, and cardio workouts. All programs are customizable to match your fitness level and goals.",
  },
  {
    question: "Do you provide nutrition guidance?",
    answer:
      "Yes, our certified nutritionists create personalized meal plans and provide dietary advice to complement your fitness routine. We also offer nutrition workshops and one-on-one consultations.",
  },
  {
    question: "How often should I work out?",
    answer:
      "The frequency of workouts depends on your fitness goals and current level. Generally, we recommend 3-5 sessions per week, with adequate rest days for recovery. Our trainers will help create a schedule that works best for you.",
  },
  {
    question: "Do you offer online training sessions?",
    answer:
      "Yes, we provide virtual training sessions and online coaching. This includes live video workouts, recorded sessions, and remote progress tracking through our digital platform.",
  },
  {
    question: "What&apos;s your cancellation policy?",
    answer:
      "We understand that plans change. We request 24-hour notice for cancelling individual sessions. For membership cancellations, please refer to your specific membership agreement or contact our support team.",
  },
  {
    question: "Are your trainers certified?",
    answer:
      "All our trainers are certified professionals with extensive experience in fitness and wellness. They regularly undergo additional training to stay updated with the latest fitness trends and techniques.",
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and programs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className=" bg-sky-500 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white  hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
