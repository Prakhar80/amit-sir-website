"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaShoppingCart, FaBook, FaCertificate, FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Course {
  id: number;
  name: string;
  price: number;
  icon: string;
}

export default function IBMCertificationPage() {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'certify'>('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const badges = [
    { name: "Data Science Tools", image: "/ibm-logo/Data_Science_Tools.png" },
    { name: "Accelerated Deep Learning", image: "/ibm-logo/Accelerated_Deep_Learning_with_GPU.png" },
    { name: "Building Cloud-Native", image: "/ibm-logo/Building_Cloud-Native_and_Multicloud_Apps.png" },
    { name: "Data Analysis using Python", image: "/ibm-logo/Data_Analysis_using_Python.png" },
    { name: "Data Science Methodologies", image: "/ibm-logo/Data_Science_Methodologies.png" },
    { name: "IBM Cloud Essentials", image: "/ibm-logo/IBM_Cloud_Essentials.png" },
    { name: "Node RED Basics", image: "/ibm-logo/Node_RED_-_Basics_to_Bots_-_IDSN.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (badges.length * 200));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const courses: Course[] = [
    {
      id: 1,
      name: "IBM Gen AI – Generative AI Essentials Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-450x281.png"
    },
    {
      id: 2,
      name: "IBM Web Development using HTML5, CSS & JavaScript Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-2-450x281.png"
    },
    {
      id: 3,
      name: "IBM Software Foundation Course C Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/AI900-3-450x281.png"
    },
    {
      id: 4,
      name: "IBM Software Foundation Course C++ Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-4-450x281.png"
    },
    {
      id: 5,
      name: "IBM RDBMS - Database Fundamentals with Oracle Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/RDBMS-450x281.png"
    },
    {
      id: 6,
      name: "IBM SQL and Relational Database 101 Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-5-450x281.png"
    },
    {
      id: 7,
      name: "IBM DevOps Learning with TerraForm Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-6-450x281.png"
    },
    {
      id: 8,
      name: "IBM DevOps Science Methodology Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-7-450x281.png"
    },
    {
      id: 9,
      name: "IBM Python for Data Science Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-8-450x281.png"
    },
    {
      id: 10,
      name: "IBM Blue API Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/agile--450x281.png"
    },
    {
      id: 11,
      name: "IBM Scala 101 Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-1-450x281.png"
    },
    {
      id: 12,
      name: "IBM Agile Methodologies Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/agile-2-450x281.png"
    },
    {
      id: 13,
      name: "IBM DevOps Fundamentals Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-3-450x281.png"
    },
    {
      id: 14,
      name: "IBM Data Analysis with Python Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-12-450x281.png"
    },
    {
      id: 15,
      name: "IBM Cloud Foundational Certification Course",
      price: 3000,
      icon: "/ibm-logo/New folder/AI900-13-450x281.png"
    },
    {
      id: 16,
      name: "IBM Introduction to Containers, Kubernetes and OpenShift V2 Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-15-450x281.png"
    },
    {
      id: 17,
      name: "IBM Introduction to Big Data, Hadoop and Spark Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-16-450x281.png"
    },
    {
      id: 18,
      name: "IBM Node.JS Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-17-450x281.png"
    },
    {
      id: 19,
      name: "IBM NoSQL - MongoDB Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-1-450x281.png"
    },
    {
      id: 20,
      name: "IBM Machine Learning with Python Certification Course",
      price: 2000,
      icon: "/ibm-logo/New folder/agile-2-450x281.png"
    }
  ];

  const faqs = [
    {
      question: "Who provides the certification and how long is it valid for?",
      answer: "Upon successful completion, you will be awarded an industry-recognized certificate from IBM which has lifelong validity."
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer: "You need to complete all course modules, submit required assignments, and pass the final assessment to earn the certificate."
    },
    {
      question: "What is the duration of the certification exam?",
      answer: "The exam duration varies by course but typically ranges from 60 to 90 minutes depending on the certification level."
    },
    {
      question: "How many attempts do I have to pass the certification exam?",
      answer: "You get unlimited attempts to pass the certification exam. You can retake the exam after a waiting period of 24 hours."
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Scrolling Badges Section */}
        <div className="bg-gray-50 py-8 overflow-hidden border-b">
          <div className="flex gap-6 animate-scroll" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {[...badges, ...badges, ...badges].map((badge, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-44 h-44 rounded-full flex items-center justify-center bg-white shadow-md"
              >
                <img 
                  src={badge.image} 
                  alt={badge.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  IBM Certification Courses
                </h1>
                
                <div className="space-y-4 text-gray-700 text-base">
                  <p>
                    <strong>IBM Certification Courses</strong> helps learners gain skills in the latest emerging technologies including AI/ML, Analytics, 
                    Blockchain, Cloud, Cybersecurity, Data Science and more.
                  </p>
                  <p>
                    This is a certification program offered by IBM along with e-courseware which includes videos, hands-on labs, and 
                    reading material for better preparation.
                  </p>
                </div>

                <button className="mt-8 bg-blue-900 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors">
                  Explore More
                </button>
              </div>

              {/* Right Banner */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-lg overflow-hidden shadow-2xl relative">
                  {/* Diagonal pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 top-0 w-full h-full">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute right-0" style={{ top: `${i * 30}px` }}>
                          {[...Array(30)].map((_, j) => (
                            <span key={j} className="inline-block w-2 h-2 bg-blue-400 rounded-full mx-1 my-1"></span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* White card with content */}
                  <div className="relative m-8 bg-white rounded-lg p-8">
                    <div className="flex flex-col items-center">
                      <div className="self-start mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                          Up-skill with<br/>IBM
                        </h2>
                      </div>
                      
                      {/* Image with blue wave */}
                      <div className="relative w-full flex justify-center mb-6">
                        <img 
                          src="/ibm-logo/IBM-600x338.jpg" 
                          alt="IBM Learning"
                          className="w-64 h-auto object-contain z-10"
                        />
                        {/* Blue wave decoration */}
                        <div className="absolute top-0 right-0 w-48 h-48">
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            <path d="M 0,100 Q 50,50 100,100 T 200,100" stroke="#1E40AF" strokeWidth="20" fill="none" strokeLinecap="round"/>
                            <circle cx="150" cy="120" r="12" fill="#1E40AF"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* IBM Logo at bottom right */}
                      <div className="self-end">
                        <span className="text-5xl font-bold text-blue-700" style={{ letterSpacing: '0.2em' }}>IBM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab('learn')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'learn'
                    ? 'text-orange-500 border-b-4 border-orange-500 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Learn 📚
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'practice'
                    ? 'text-orange-500 border-b-4 border-orange-500 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Practice ✍️
              </button>
              <button
                onClick={() => setActiveTab('certify')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'certify'
                    ? 'text-orange-500 border-b-4 border-orange-500 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Certify 🎖️
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Course Header */}
                  <div className="bg-blue-900 text-white text-center py-2 text-sm font-semibold">
                    CERTIFICATION COURSE
                  </div>

                  {/* Course Icon */}
                  <div className="flex justify-center py-6 bg-gray-50">
                    <div className="w-full h-32 flex items-center justify-center">
                      <img 
                        src={course.icon} 
                        alt={course.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* IBM Logo */}
                  <div className="bg-gray-200 text-center py-2">
                    <span className="text-xl font-bold text-gray-700">IBM</span>
                  </div>

                  {/* Course Details */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4 h-16 overflow-hidden">
                      {course.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-blue-900 text-white py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                        Add to Cart
                      </button>
                      <button className="w-full bg-blue-900 text-white py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Certificate Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Sample Certificate</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Certificate Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <img 
                      src="/ibm-logo/1696501437679.jpg" 
                      alt="IBM Sample Certificate"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-blue-600 rounded-r-full -z-10"></div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    >
                      <span className="text-sm">{faq.question}</span>
                      {openFaq === index ? (
                        <FaChevronUp className="text-gray-600 flex-shrink-0 ml-4" />
                      ) : (
                        <FaChevronDown className="text-gray-600 flex-shrink-0 ml-4" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm border-t border-gray-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
