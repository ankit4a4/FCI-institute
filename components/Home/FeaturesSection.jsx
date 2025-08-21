"use client";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiGlobe } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Legacy of Excellence",
      description:
        "India's oldest continuously run educational institution with 25+ years of academic excellence in Dehradun.",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Strong Alumni Network",
      description:
        "Extensive network of successful graduates placed in top Indian companies and international organizations.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Industry-Ready Curriculum",
      description:
        "Courses designed with industry experts to meet current market demands and future trends.",
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Opportunities",
      description:
        "Specialized programs like Cruise Operations opening doors to international career opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="md:py-20 py-8 relative overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-blue-400">FCI Institute</span>?
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Committed to providing academically rigorous education for
            leadership and community service to Indian students
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              className="backdrop-blur-md bg-white/10 border border-white/20 
                         p-8 rounded-xl shadow-xl hover:shadow-2xl 
                         transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon container */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-xl text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 relative">
                  {feature.title}
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></span>
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
