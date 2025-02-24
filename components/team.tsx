"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Anjitha Vidayarathna",
    role: "Frontend Developer",
    image: "/images/anjitha.jpg",
    linkedin: "https://www.linkedin.com/in/anjitha-vidyarathna-691521295/",
  },
  {
    name: "Pasindu Randika",
    role: "Frontend Developer",
    image: "/images/randika.jpg",
    linkedin: "https://www.linkedin.com/in/pasindu-randika/",
  },
  {
    name: "Esitha Jayasundara",
    role: "Frontend Developer",
    image: "/images/esitha.jpg",
    linkedin:
      "https://www.linkedin.com/in/esitha-jayasundara-2a8102295/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Tharushi Jayasooriya",
    role: "Backend Developer",
    image: "/images/anupama2.jpg",
    linkedin: "https://www.linkedin.com/in/tharushi-jayasooriya/",
  },
  {
    name: "Chathuni Sooriyarachchi",
    role: "Backend Developer",
    image: "/images/chathuni.jpg",
    linkedin: "https://www.linkedin.com/in/chathuni-sooriyaarachchi-70060227b/",
  },
  {
    name: "Disath Damsana",
    role: "Backend Developer",
    image: "/images/disath.jpg",
    linkedin: "https://www.linkedin.com/in/disath-damsana/",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to your health and wellness
            journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-60 h-60 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
