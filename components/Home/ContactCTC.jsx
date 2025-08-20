import React from 'react'
import { motion } from "framer-motion";
import { FiArrowRight, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const ContactCTC = () => {
  return (
    <>
            <section className="py-20 bg-[#940a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join India's premier management institute and become part of our
              legacy of excellence. Your future in hospitality and management
              starts here in Dehradun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Apply Now
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactCTC
