"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/Courses/CourseCard';
import { FiFilter } from 'react-icons/fi';

export default function Courses() {
  const [filter, setFilter] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out-sine',
          delay: 100,
          once: true
        });
      });
    }
  }, []);

  const courses = [
    {
      title: "Hotel Management Diploma",
      description: "Comprehensive 2-year program covering all aspects of hotel operations, from front office to housekeeping, designed for the Indian hospitality industry.",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Diploma",
      duration: "2 Years",
      students: "500",
      placement: "95",
      highlights: ["Industry Internships", "5-Star Hotel Training", "Placement Support"]
    },
    {
      title: "Cruise Operations Certificate",
      description: "Specialized training designed with cruise experts for global opportunities, preparing students for international cruise industry careers.",
      image: "https://images.pexels.com/photos/1002779/pexels-photo-1002779.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Certificate",
      duration: "1 Year",
      students: "200",
      placement: "90",
      highlights: ["International Scope", "Expert Faculty", "Global Placement"]
    },
    {
      title: "Real Estate Management",
      description: "Modern approaches to property management and development tailored for India's booming real estate sector.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Certificate",
      duration: "6 Months",
      students: "150",
      placement: "85",
      highlights: ["Market Analysis", "Legal Compliance", "Investment Planning"]
    },
    {
      title: "Business Administration",
      description: "Foundational business skills program focusing on Indian business practices and entrepreneurship opportunities.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Diploma",
      duration: "2 Years",
      students: "300",
      placement: "88",
      highlights: ["Leadership Skills", "Business Analytics", "Startup Support"]
    },
    {
      title: "Digital Marketing Certificate",
      description: "Contemporary digital marketing strategies tailored for Indian businesses and e-commerce platforms.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Certificate",
      duration: "3 Months",
      students: "250",
      placement: "92",
      highlights: ["Social Media", "SEO/SEM", "Content Strategy"]
    },
    {
      title: "Tourism Management",
      description: "Comprehensive program focusing on India's diverse tourism sector and heritage site management.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Diploma",
      duration: "18 Months",
      students: "180",
      placement: "89",
      highlights: ["Heritage Tourism", "Adventure Tourism", "Cultural Programs"]
    },
    {
      title: "Food & Beverage Management",
      description: "Specialized program covering restaurant management, culinary operations, and Indian food service industry.",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Certificate",
      duration: "8 Months",
      students: "120",
      placement: "87",
      highlights: ["Kitchen Operations", "Service Excellence", "Cost Control"]
    },
    {
      title: "Event Management",
      description: "Creative program focusing on wedding planning, corporate events, and cultural celebrations popular in India.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Certificate",
      duration: "6 Months",
      students: "160",
      placement: "91",
      highlights: ["Wedding Planning", "Corporate Events", "Vendor Management"]
    },
    {
      title: "Aviation & Airport Management",
      description: "Comprehensive training for India's growing aviation sector including airport operations and airline services.",
      image: "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Diploma",
      duration: "15 Months",
      students: "100",
      placement: "93",
      highlights: ["Airport Operations", "Customer Service", "Safety Protocols"]
    }
  ];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.type === filter));
    }
  }, [filter]);

  const filters = ['All', 'Diploma', 'Certificate'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Industry-focused programs designed to prepare you for successful careers 
              in hospitality, management, and emerging sectors in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center space-x-2 mr-6">
              <FiFilter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === filterOption
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={`${course.title}-${index}`} course={course} index={index} />
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed with industry experts to meet current market demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description: "Courses updated regularly with industry trends and requirements"
              },
              {
                title: "Expert Faculty",
                description: "Learn from experienced professionals and industry veterans"
              },
              {
                title: "Practical Training",
                description: "Hands-on experience through internships and live projects"
              },
              {
                title: "Placement Support",
                description: "Dedicated placement cell with strong industry connections"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}