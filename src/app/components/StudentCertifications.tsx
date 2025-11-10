"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StudentCertifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const certifications = [
    {
      id: 1,
      studentName: "Atul Soni",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "June 15, 2024",
      image: "/images/cert-atul-soni.jpg",
      company: "Microsoft",
      color: "from-blue-500 to-cyan-500",
      icon: "☁️"
    },
    {
      id: 2,
      studentName: "Gajendra Singh Tomar",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "June 28, 2024",
      image: "/images/cert-gajendra.jpg",
      company: "Microsoft",
      color: "from-blue-600 to-indigo-600",
      icon: "☁️"
    },
    {
      id: 3,
      studentName: "Nipun Sheti",
      certification: "Microsoft Certified: Azure Fundamentals",
      issueDate: "July 10, 2024",
      image: "/images/cert-nipun.jpg",
      company: "Microsoft",
      color: "from-cyan-500 to-blue-600",
      icon: "☁️"
    },
    {
      id: 4,
      studentName: "Kamal",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "2023",
      image: "/images/cert-kamal-aws.jpg",
      company: "AWS",
      color: "from-orange-500 to-yellow-500",
      icon: "🚀"
    },
    {
      id: 5,
      studentName: "Ravi",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "2023",
      image: "/images/cert-ravi-aws.jpg",
      company: "AWS",
      color: "from-orange-600 to-red-500",
      icon: "🚀"
    },
    {
      id: 6,
      studentName: "Manish Kumar",
      certification: "AWS Certified Solutions Architect - Associate",
      issueDate: "September 08, 2020",
      image: "/images/cert-manish-aws.jpg",
      company: "AWS",
      color: "from-yellow-500 to-orange-600",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, certifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float-slow2" />
        <div className="absolute bottom-20 left-32 w-36 h-36 bg-cyan-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-40 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl animate-float-slow2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Compact */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              🏆 Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
            Our Students'
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Latest Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our students who earned globally recognized certifications
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certifications.map((cert) => (
                  <div key={cert.id} className="min-w-full flex-shrink-0 px-2">
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden mx-auto max-w-2xl">
                    {/* Certificate Image - Full Display */}
                    <div className="relative h-80 md:h-96 overflow-hidden bg-white">
                      <Image
                        src={cert.image}
                        alt={`${cert.studentName} - ${cert.certification}`}
                        fill
                        priority={cert.id <= 2}
                        className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      {/* Company Badge - Small */}
                      <div className="absolute top-3 right-3">
                        <div className={`bg-gradient-to-r ${cert.color} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5`}>
                          <span className="text-sm">{cert.icon}</span>
                          <span>{cert.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Compact */}
                    <div className="p-5 md:p-6">
                      {/* Student Name - Smaller */}
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        <span className="text-lg">🎉</span>
                        {cert.studentName}
                      </h3>

                      {/* Details - Compact Layout */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                          <span className="text-xl">🎓</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 mb-1">Certification</p>
                            <p className="text-sm md:text-base font-bold text-gray-800 leading-tight">
                              {cert.certification}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                          <span className="text-xl">📅</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 mb-1">Issue Date</p>
                            <p className="text-sm md:text-base font-bold text-gray-800">
                              {cert.issueDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                          <span className="text-xl">🏢</span>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 mb-1">Issued By</p>
                            <p className={`text-base md:text-lg font-black bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                              {cert.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Badge - Smaller */}
                      <div className="mt-5 pt-4 border-t border-gray-200">
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
                          <span className="text-base">✨</span>
                          <span>Certified Professional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Closer to card */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-3 md:-translate-x-4 bg-white/95 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Previous certification"
          >
            <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-3 md:translate-x-4 bg-white/95 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Next certification"
          >
            <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators - Smaller */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>

        {/* Student Counter - Smaller */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-base font-semibold">
            Showing <span className="text-blue-600 font-black">{currentSlide + 1}</span> of <span className="text-blue-600 font-black">{certifications.length}</span> Certified Students
          </p>
        </div>

        {/* CTA Section - Compact */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Your Success Story Starts Here! 🚀
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join our next batch and earn globally recognized certifications!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/explore-courses"
                className="group bg-white text-gray-900 px-6 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <span className="text-xl group-hover:animate-bounce">🎓</span>
                <span>Explore Courses</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+91-9522220892"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <span className="text-xl group-hover:animate-bounce">📞</span>
                <span>Call Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCertifications;
