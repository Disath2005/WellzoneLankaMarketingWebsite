"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/img2.jpg"
              alt="About WellZone Lanka"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Journey to Better Health Starts Here
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At WellZone Lanka, we believe in a holistic approach to health and
              fitness. Our expert team provides personalized solutions to help
              you achieve your wellness goals.
            </p>
            <ul className="space-y-4">
              {[
                "Expert fitness trainers",
                "Customized workout plans",
                "Nutrition guidance",
                "Mental wellness support",
                "Community support",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-lg"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
