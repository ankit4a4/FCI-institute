"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-900"
          >
            <h2 className="text-4xl font-bold mb-6">
              About FCI Institute of Management
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-600">
              As the oldest continuously run educational institution, FCI
              Institute of Management remains committed to providing an
              academically rigorous education to students who will walk out of
              the institute ready for lives of leadership and service to their
              community.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              From literacy to practical learning, each day at FCI Institute of
              Management is filled with activities that are both enriching and
              fun. We are privileged to serve our students with the support of
              visionary parents, well-wishers, alumni, and industry partners.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
            >
              Learn More About Us
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Image with Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="FCI Institute Campus"
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
