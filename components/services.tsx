"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Heart, Brain, Dumbbell } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  imageLeft?: boolean;
  points?: string[];
}

const services: Service[] = [
  {
    title: "Exercise Tacking",
    description:
      "Stay on top of your fitness journey with real-time progress tracking, detailed workout logs, and performance analytics. Monitor your daily activities, set fitness goals, and stay motivated with personalized insights.",
    image: "/images/exercise.jpg",
    imageLeft: true,
  },
  {
    title: "AI Powered Exercises",
    description:
      "Experience next-level fitness with AI-driven workout recommendations tailored to your body type, fitness level, and goals. Our intelligent system adapts as you progress, ensuring safe and effective exercises for maximum results.",
    image: "/images/ai.jpg",
    imageLeft: false,
  },
  {
    title: "Physiotherapist Consultation",
    description:
      "Get expert guidance from certified physiotherapists to prevent injuries, recover effectively, and improve mobility. Schedule online consultations and receive personalized therapy plans designed to support your overall well-being.",
    image: "/images/physio.jpg",
    imageLeft: true,
  },
  {
    title: "Gym Trainer Consultation",
    description:
      "Access professional fitness coaching from experienced trainers who create customized workout plans, provide expert advice, and keep you motivated. Whether you're a beginner or an advanced athlete, get the guidance you need to achieve your fitness goals.",
    image: "/images/trainer.jpg",
    imageLeft: false,
  },
  {
    title: "Chat Bot",
    description:
      "Have fitness and health support at your fingertips with our AI-powered chatbot. Get instant answers to workout queries, exercise recommendations, nutrition tips, and general wellness advice—all available 24/7 for your convenience.",
    image: "/images/chatbot.jpg",
    imageLeft: true,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive health and fitness solutions tailored to your needs
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                service.imageLeft ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={service.imageLeft ? "md:col-start-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.points &&
                    service.points.map((point, pointIndex) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                </ul>
              </div>

              <div className={service.imageLeft ? "md:col-start-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
