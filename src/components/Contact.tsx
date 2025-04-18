import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SectionHeading from './ui/SectionHeading';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-24 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Me" subtitle="Get In Touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className={`mb-8 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}>
                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:jaykania123@gmail.com" 
                    className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    jaykania123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}>
                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
                }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+11234567890" 
                    className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    +91 9537003277
                  </a>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}>
                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-500'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
            >
              {submitSuccess && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Your message has been sent successfully!
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg focus:ring focus:ring-opacity-50 outline-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="Jay Kania"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg focus:ring focus:ring-opacity-50 outline-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                    placeholder="jaykania123@gmail.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg focus:ring focus:ring-opacity-50 outline-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/50' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg focus:ring focus:ring-opacity-50 outline-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/50' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/50'
                  }`}
                  placeholder="Hi, I'm interested in discussing a project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all ${
                  isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;