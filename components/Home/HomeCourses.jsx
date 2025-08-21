import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import course1 from "../../public/course/1.jpg";
import course2 from "../../public/course/2.jpg";
import course3 from "../../public/course/3.jpg";
import Image from "next/image";
const HomeCourses = () => {
  const courses = [
    {
      title: "Diploma in Hospitality services management",
      description:
        "This course covers hers four departments of the hotel viz: Front Office, House keeping, F&B production, along with Computers, Personality Development, English Language, Types of Hotels, Reservations.",
      image: course1,
      duration: "2 Years",
      type: "Diploma",
    },
    {
      title: "Diploma in Accommodation Operations",
      description:
        "Training of maintenance and cleanliness of the entire Hotel, Bed Making, Flower Decoration, Lighting, Stain Removals, Personality Development, English Language & many more",
      image: course2,
      duration: "1 Year",
      type: "Diploma",
    },
    {
      title: "Diploma in Catering Operation",
      description:
        "This course covers all type of cuisine like Indian, Chinese, Continental, Mughlai etc, Hygiene, food Nutrition services of food and Beverages of the customer.",
      image: course3,
      duration: "6 Months",
      type: "Diploma",
    },
  ];

  return (
    <>
      <section className="md:py-20 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused programs designed to prepare you for successful
              careers in hospitality and management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    height={100}
                    width={100}
                    src={course.image.src}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        course.type === "Diploma"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      {course.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <Link
                    href="/courses"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
            >
              View All Courses
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCourses;
