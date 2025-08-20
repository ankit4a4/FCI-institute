"use client";
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiAward } from 'react-icons/fi';
import Link from 'next/link';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
            course.type === 'Diploma' ? 'bg-blue-600' : 
            course.type === 'Certificate' ? 'bg-green-600' : 'bg-purple-600'
          }`}>
            {course.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center space-x-1">
            <FiClock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiUsers className="w-4 h-4" />
            <span>{course.students}+ Students</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiAward className="w-4 h-4" />
            <span>{course.placement}% Placed</span>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {course.highlights?.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-500/25 transform hover:scale-105 inline-flex items-center justify-center"
          >
            Enquire Now
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;