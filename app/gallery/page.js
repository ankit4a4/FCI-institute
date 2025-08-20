"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from '@/components/Gallery/GalleryGrid';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState([]);

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

  const images = [
    {
      src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Modern Campus Building",
      category: "Campus",
      description: "Our state-of-the-art campus in the heart of Dehradun"
    },
    {
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Interactive Classroom",
      category: "Campus",
      description: "Modern classrooms equipped with latest technology"
    },
    {
      src: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Library & Study Area",
      category: "Campus",
      description: "Comprehensive library with extensive business collection"
    },
    {
      src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Graduation Ceremony 2024",
      category: "Events",
      description: "Celebrating our successful graduates"
    },
    {
      src: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Industry Expert Seminar",
      category: "Events",
      description: "Regular seminars by industry professionals"
    },
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Business Presentation",
      category: "Activities",
      description: "Students presenting their business plans"
    },
    {
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Group Study Session",
      category: "Activities",
      description: "Collaborative learning environment"
    },
    {
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cultural Festival",
      category: "Events",
      description: "Annual cultural celebration with students from across India"
    },
    {
      src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Culinary Training Lab",
      category: "Campus",
      description: "Professional kitchen for hospitality students"
    },
    {
      src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tourism Workshop",
      category: "Activities",
      description: "Hands-on training in tourism management"
    },
    {
      src: "https://images.pexels.com/photos/159775/library-books-bookshelves-university-159775.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Research Center",
      category: "Campus",
      description: "Dedicated space for academic research and projects"
    },
    {
      src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Alumni Meet 2024",
      category: "Events",
      description: "Annual gathering of our successful alumni network"
    }
  ];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.category === filter));
    }
  }, [filter]);

  const categories = ['All', 'Campus', 'Events', 'Activities'];

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
              Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our vibrant campus life, events, and activities in the beautiful 
              setting of Dehradun, Uttarakhand
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
            className="flex justify-center"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GalleryGrid images={filteredImages} />
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Dehradun campus offers world-class facilities and a vibrant learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Infrastructure",
                description: "State-of-the-art buildings with contemporary design and facilities",
                icon: "🏢"
              },
              {
                title: "Technology-Enabled Learning",
                description: "Smart classrooms with interactive boards and modern AV systems",
                icon: "💻"
              },
              {
                title: "Professional Labs",
                description: "Industry-standard labs for hospitality and management training",
                icon: "⚗️"
              },
              {
                title: "Extensive Library",
                description: "Comprehensive collection of business and management resources",
                icon: "📚"
              },
              {
                title: "Cultural Activities",
                description: "Regular events celebrating India's diverse cultural heritage",
                icon: "🎭"
              },
              {
                title: "Sports & Recreation",
                description: "Facilities for various sports and recreational activities",
                icon: "⚽"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}