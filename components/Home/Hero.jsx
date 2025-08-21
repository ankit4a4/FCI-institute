"use client";
import { useState, useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "FCI Institute of Management",
      subtitle:
        "The oldest continuously run educational institution in Dehradun",
    },
    {
      image:
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Committed to Academic Excellence",
      subtitle:
        "Providing rigorous education to shape tomorrow’s leaders",
    },
    {
      image:
        "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Shaping Futures Since 2000",
      subtitle:
        "Dedicated faculty, active alumni & industry partnerships",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative md:h-[600px] h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🏆 Established 2000 • Dehradun, India
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-2xl text-blue-100 mb-8 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              Explore Courses
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300">
              <FiPlay className="mr-2 w-5 h-5" />
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-blue-100">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-blue-100">Students Graduated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-100">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
