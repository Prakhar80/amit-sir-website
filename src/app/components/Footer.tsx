"use client";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface FooterProps {
  onPolicyClick?: (type: string) => void;
}

export default function Footer({ onPolicyClick }: FooterProps = {}) {
  const handlePolicyClick = (type: string) => {
    if (onPolicyClick) {
      onPolicyClick(type);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-12 md:py-20 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Stay Updated with Latest <span className="text-yellow-400">Tech Trends</span>
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Get exclusive updates on new courses, certification tips, and industry insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Subscribe 🚀
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/litc-logo.svg" 
                  alt="LITC INFOTECH" 
                  className="w-8 h-8 object-contain filter brightness-110"
                />
              </div>
              <div>
                <h4 className="font-black text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  LITC
                </h4>
                <p className="text-xs text-white/60 uppercase tracking-wide">INFOTECH</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading IT Training Institute in Indore since 2015. Empowering students with cutting-edge technology skills and globally recognized certifications.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebook, link: "https://facebook.com/litcindore", name: "Facebook", color: "hover:text-blue-500" },
                { Icon: FaInstagram, link: "https://instagram.com/litcindore", name: "Instagram", color: "hover:text-pink-500" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/company/litcinfotech/", name: "LinkedIn", color: "hover:text-blue-400" },
                { Icon: FaEnvelope, link: "mailto:info@litcindore.com", name: "Gmail", color: "hover:text-red-500" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 group ${social.color}`}
                  title={social.name}
                >
                  <social.Icon className="text-lg text-white group-hover:animate-bounce" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="text-blue-400">🔗</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", link: "/about" },
                { name: "All Courses", link: "/explore-courses" },
                { name: "Certifications", link: "/explore-courses" },
                { name: "Exam Voucher", link: "/Exam-Voucher" },
                { name: "Success Stories", link: "/#testimonials" },
                { name: "Contact Us", link: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="text-green-400">🎓</span> Popular Courses
            </h4>
            <ul className="space-y-3">
              {[
                { name: "RHCSA Linux Admin", icon: "🔴", link: "/certifications/rhcsa" },
                { name: "RHCE (ANSIBLE 234)", icon: "🔴", link: "/certifications/rhce" },
                { name: "AWS Solutions Architect", icon: "☁️", link: "/aws/cloud-services" },
                { name: "CCNA Network Engineering", icon: "🌐", link: "/cisco/ccna-training-200-301" },
                { name: "Azure Administrator", icon: "☁️", link: "/microsoft/az-104" },
                { name: "Cybersecurity (Basic + Advanced)", icon: "🔒", link: "/cybersecurity/basic-advanced" }
              ].map((course, i) => (
                <li key={i}>
                  <a
                    href={course.link}
                    className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{course.icon}</span>
                    <span className="text-sm">{course.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="text-purple-400">📞</span> Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <span className="text-blue-400">📍</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong>Main Office:</strong><br />
                    P13-14, Ground Floor, Metro Tower,<br />
                    Vijay Nagar, Indore, MP - 452010
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mt-3">
                    <strong>Second Office:</strong><br />
                    G5, 10/102, Shri Balaji Center Building,<br />
                    Station Road, Rau, Indore, MP - 453331
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <span className="text-green-400">📞</span>
                </div>
                <a
                  href="tel:+91-9522220892"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  +91-9522220892
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                  <span className="text-purple-400">✉️</span>
                </div>
                <a
                  href="mailto:info@litcindore.com"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  info@litcindore.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                  <span className="text-orange-400">🌐</span>
                </div>
                <a
                  href="https://litcindore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  litcindore.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-white/60 text-sm">
                © 2025 LITC Infotech. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm text-white/60">
              <button onClick={() => handlePolicyClick('privacy')} className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <button onClick={() => handlePolicyClick('terms')} className="hover:text-white transition-colors duration-300">Terms & Conditions</button>
              <button onClick={() => handlePolicyClick('refund')} className="hover:text-white transition-colors duration-300">Refund Policy</button>
              <button onClick={() => handlePolicyClick('cancellation')} className="hover:text-white transition-colors duration-300">Cancellation Policy</button>
            </div>
            <p className="text-white/40 text-xs text-center mt-2">
              🚀 Empowering careers through technology education since 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
