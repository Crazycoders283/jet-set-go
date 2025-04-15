import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import DestinationSection from './DestinationSection';
import CruiseLineSection from './CruiseLineSection';
import PartnerSection from './PartnerSection';
import NewsletterSection from './NewsletterSection';
import { FaShip, FaAnchor, FaStar, FaLifeRing, FaUsers, FaCheckCircle, FaTimes, FaQuoteRight, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const TrustIndicators = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800">Trusted by Thousands</h3>
            <p className="text-gray-600">Join our community of satisfied travelers</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0066b2]">12K+</span>
              <span className="text-gray-600 text-sm">Happy Customers</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0066b2]">150+</span>
              <span className="text-gray-600 text-sm">Destinations</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0066b2]">98%</span>
              <span className="text-gray-600 text-sm">Satisfaction Rate</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0066b2]">24/7</span>
              <span className="text-gray-600 text-sm">Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialBanner = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setShowContactForm(false);
      setContactForm({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const testimonialItems = [
    {
      name: "Sarah Johnson",
      position: "Travels with Royal Caribbean",
      text: "The best cruise booking experience I've ever had! Their customer service team went above and beyond to help me find the perfect cruise for my family. The booking process was seamless and everything was organized perfectly.",
      rating: 5,
      image: "/images/reviewer1.jpg"
    },
    {
      name: "Michael Chen",
      position: "Frequent Cruiser",
      text: "I've booked multiple cruises through this website and have never been disappointed. The prices are competitive and the booking process is seamless. Their support team is always available to answer questions.",
      rating: 5,
      image: "/images/reviewer2.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "First-time Cruiser",
      text: "As someone new to cruising, I appreciated how easy it was to find information and compare options. They made the whole experience stress-free! I'll definitely be booking my next cruise here too.",
      rating: 5,
      image: "/images/reviewer3.jpg"
    }
  ];

  useEffect(() => {
    if (showTestimonials) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showTestimonials, testimonialItems.length]);

  return (
    <div className="py-10 bg-gradient-to-r from-[#0066b2] to-[#1e88e5] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-0 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">"The best cruise booking experience I've ever had!"</h3>
            <p className="opacity-90 mb-4">— Sarah Johnson, traveled with Royal Caribbean</p>
            <div className="flex items-center justify-center md:justify-start">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <span className="ml-2 text-sm opacity-90">5.0 from over 3,200 reviews</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button 
              className="bg-white text-[#0066b2] font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center hover:shadow-lg hover:-translate-y-1 duration-300"
              onClick={() => setShowTestimonials(true)}
            >
              <FaUsers className="mr-2" /> Read Testimonials
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#0066b2] transition-all flex items-center hover:shadow-lg hover:-translate-y-1 duration-300"
              onClick={() => setShowContactForm(true)}
            >
              <FaLifeRing className="mr-2" /> Contact Support
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Support Modal */}
      {showContactForm && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowContactForm(false)}
          style={{
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-0 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideUp 0.4s ease-out',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="bg-gradient-to-r from-[#0066b2] to-[#1e88e5] pt-8 pb-12 px-6 text-white relative">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                onClick={() => setShowContactForm(false)}
                aria-label="Close popup"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaLifeRing className="text-[#0066b2]" size={20} />
                </div>
                <h2 className="text-2xl font-bold">Contact Our Support Team</h2>
              </div>
              
              <p className="opacity-90 text-sm">
                Our cruise experts are here to assist you with any questions
              </p>
              
              <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white rounded-t-[50%]"></div>
            </div>
            
            <div className="px-6 pb-6 pt-8">
              {submitted ? (
                <div className="text-center py-10 px-4 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-500" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="w-16 h-1 bg-green-500 mx-auto"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className={`transition-all duration-200 ${activeField === 'name' ? 'transform -translate-y-1' : ''}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'name' ? 'ring-2 ring-[#0066b2]' : 'ring-1 ring-gray-200'}`}>
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className={`transition-colors ${activeField === 'name' ? 'text-[#0066b2]' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className="w-full bg-gray-50 pl-12 pr-4 py-3 border-none rounded-lg focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-200 ${activeField === 'email' ? 'transform -translate-y-1' : ''}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'email' ? 'ring-2 ring-[#0066b2]' : 'ring-1 ring-gray-200'}`}>
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaEnvelope className={`transition-colors ${activeField === 'email' ? 'text-[#0066b2]' : 'text-gray-400'}`} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className="w-full bg-gray-50 pl-12 pr-4 py-3 border-none rounded-lg focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-200 ${activeField === 'message' ? 'transform -translate-y-1' : ''}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                      How can we help?
                    </label>
                    <div className={`relative rounded-lg transition-all duration-300 ${activeField === 'message' ? 'ring-2 ring-[#0066b2]' : 'ring-1 ring-gray-200'}`}>
                      <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                        <FaCommentAlt className={`transition-colors ${activeField === 'message' ? 'text-[#0066b2]' : 'text-gray-400'}`} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        rows="4"
                        className="w-full bg-gray-50 pl-12 pr-4 py-3 border-none rounded-lg focus:outline-none resize-none"
                        placeholder="Please describe your question or issue..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0066b2] to-[#1e88e5] text-white font-bold py-4 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center mt-6"
                  >
                    Submit Request
                  </button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Testimonials Modal */}
      {showTestimonials && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowTestimonials(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-0 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideUp 0.4s ease-out',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="bg-gradient-to-r from-[#0066b2] to-[#1e88e5] pt-8 pb-12 px-6 text-white relative">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                onClick={() => setShowTestimonials(false)}
                aria-label="Close popup"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaUsers className="text-[#0066b2]" size={20} />
                </div>
                <h2 className="text-2xl font-bold">What Our Customers Say</h2>
              </div>
              
              <p className="opacity-90 text-sm">
                Real experiences from verified customers
              </p>
              
              <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white rounded-t-[50%]"></div>
            </div>
            
            <div className="px-6 pb-8 pt-8">
              {/* Featured Testimonial */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl relative animate-fadeIn">
                <div className="absolute right-6 top-6 text-blue-200">
                  <FaQuoteRight size={40} />
                </div>
                <div className="flex items-start">
                  <img 
                    src={testimonialItems[currentTestimonial].image} 
                    alt={testimonialItems[currentTestimonial].name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-white shadow-md" 
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800">{testimonialItems[currentTestimonial].name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{testimonialItems[currentTestimonial].position}</p>
                    <div className="flex mb-4">
                      {[...Array(testimonialItems[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonialItems[currentTestimonial].text}"</p>
                  </div>
                </div>
                
                {/* Dots for navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonialItems.map((_, index) => (
                    <button 
                      key={index} 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentTestimonial(index);
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Additional Testimonials Grid */}
              <h3 className="font-bold text-gray-800 mb-4">More Customer Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[250px] overflow-y-auto pr-2">
                {testimonialItems.filter((_, i) => i !== currentTestimonial).map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentTestimonial(testimonialItems.findIndex(t => t.name === item.name));
                    }}
                  >
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        <div className="flex">
                          {[...Array(item.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs mr-1" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link to="/reviews" className="text-[#0066b2] font-bold hover:underline flex items-center justify-center">
                  View All Customer Reviews 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

const PromoSection = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <img 
                src="/images/Rectangle 1434 (2).png" 
                alt="Limited Time Offer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Limited Time
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Summer Cruise Special</h3>
              <p className="text-gray-600 mb-6">Book your summer cruise now and get up to 30% off on select destinations. Plus, receive a complimentary beverage package for two.</p>
              
              <ul className="mb-8">
                {['Up to 30% off select cruises', 'Free beverage package', 'Flexible cancellation policy', 'Kids sail free on select cruises'].map((item, index) => (
                  <li key={index} className="flex items-center mb-3">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-[#0066b2] hover:bg-[#005091] text-white font-bold py-3 px-8 rounded-md transition-colors self-start">
                View Special Offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-page">
        <HeroSection />
        <DestinationSection />
        <TrustIndicators />
        <CruiseLineSection />
        <TestimonialBanner />
        <PromoSection />
        <PartnerSection />
        <NewsletterSection />
      </div>
      
    </>
  );
};

export default HomePage; 