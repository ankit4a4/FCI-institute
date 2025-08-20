"use client";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About / Logo */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center  ">
              {/* Logo Image */}
              <div className=" rounded-lg overflow-hidden">
                <img
                  src={logo.src}
                  alt="FCI Institute Logo"
                  className="w-full h-[100px] object-cover mb-5"
                />
              </div>
            </div>
            <p className="text-gray-300  leading-relaxed">
              FCI Institute of Management is India's oldest continuously run
              educational institution, dedicated to providing academically
              rigorous education for leadership and community service. We take
              pride in serving Indian students with excellence in hospitality
              and management education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Courses", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  FCI Institute of Management
                  <br />
                  Dehradun, Uttarakhand 248001
                  <br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300"> +91 7983631066</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@fciinstitute.edu.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FCI Institute of Management. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Proudly serving Indian students since 2000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
