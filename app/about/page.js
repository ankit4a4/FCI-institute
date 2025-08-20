"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';

export default function About() {
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

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: <FiAward className="w-6 h-6" /> },
    { number: "5000+", label: "Graduates", icon: <FiUsers className="w-6 h-6" /> },
    { number: "95%", label: "Placement Rate", icon: <FiTrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Industry Partners", icon: <FiHeart className="w-6 h-6" /> }
  ];

  const milestones = [
    { year: "2000", title: "Foundation", description: "FCI Institute established in Dehradun" },
    { year: "1995", title: "First Decade", description: "1000+ students graduated with excellence" },
    { year: "2005", title: "Industry Recognition", description: "Partnerships with major Indian hospitality chains" },
    { year: "2015", title: "International Reach", description: "Launched cruise operations program" },
    { year: "2024", title: "Digital Excellence", description: "Advanced digital learning platforms introduced" }
  ];

  const values = [
    {
      title: "Academic Excellence",
      description: "Maintaining the highest standards of education and research",
      icon: "🎓"
    },
    {
      title: "Industry Relevance",
      description: "Curriculum aligned with current and future industry needs",
      icon: "🏢"
    },
    {
      title: "Community Service",
      description: "Fostering leadership for the betterment of Indian society",
      icon: "🤝"
    },
    {
      title: "Cultural Values",
      description: "Preserving and promoting Indian heritage and values",
      icon: "🕉️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About FCI Institute
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              India's oldest continuously run educational institution committed to 
              academically rigorous education for leadership and community service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Legacy of Excellence
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since 2000, FCI Institute of Management has stood as a beacon of educational 
                  excellence in Dehradun, Uttarakhand. As India's oldest continuously run 
                  educational institution in our domain, we have been privileged to serve 
                  thousands of Indian students with unwavering commitment to quality education.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission extends beyond academics - we nurture leaders who will serve 
                  their communities with integrity and vision. Located in the picturesque 
                  city of Dehradun, our campus provides an ideal environment for holistic 
                  development and academic growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We take pride in our strong alumni network spread across India and 
                  internationally, who continue to make significant contributions in their 
                  respective fields, particularly in hospitality, management, and emerging 
                  sectors of the Indian economy.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="FCI Institute Campus"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-sm font-semibold">Established</div>
                <div className="text-2xl font-bold">2000</div>
                <div className="text-xs">Dehradun, India</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our educational philosophy and institutional culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of continuous growth and educational excellence in Dehradun
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-blue-200 h-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full max-w-md ${
                  index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-8">
              Leadership Message
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl leading-relaxed mb-8 italic">
                "At FCI Institute, we believe that education is not just about acquiring knowledge, 
                but about developing character, leadership, and a commitment to serve society. 
                Our graduates don't just succeed professionally - they become leaders who make 
                a positive impact in their communities and contribute to India's growth story."
              </blockquote>
              <div className="border-t border-blue-500 pt-6">
                <div className="font-bold text-lg">Dr. Rajesh Kumar Sharma</div>
                <div className="text-blue-200">Director, FCI Institute of Management</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Located in Beautiful Dehradun
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our campus is strategically located in Dehradun, the capital city of Uttarakhand, 
                known for its pleasant climate, natural beauty, and educational heritage. 
                The serene environment of Dehradun provides an ideal setting for focused learning 
                and personal development.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With easy connectivity to major cities across North India and a rich cultural 
                heritage, Dehradun offers our students the perfect blend of academic rigor 
                and cultural enrichment that has made FCI Institute a preferred choice for 
                students from across India.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <div>📍</div>
                <div>
                  <div className="font-semibold">FCI Institute of Management</div>
                  <div>Dehradun, Uttarakhand 248001, India</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dehradun Landscape"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}