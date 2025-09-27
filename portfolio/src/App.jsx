import { useState, useEffect } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';
import headshot from './assets/headshot2.jpeg'

export default function App(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  try {
    // Replace with your EmailJS service ID, template ID, and public key
    const result = await emailjs.sendForm(
      'service_5ofhf3j',     // Get from EmailJS dashboard
      'template_0zrxwnx',    // Get from EmailJS dashboard  
      form,
      'nOcTHRnXtbGW4Pof4'      // Get from EmailJS dashboard
    );
    
    console.log('SUCCESS!', result.text);
    alert('Message sent successfully! I\'ll get back to you soon.');
    form.reset();
    
  } catch (error) {
    console.log('FAILED...', error.text);
    alert('Failed to send message. Please try again or contact me directly.');
  } finally {
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
};

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 100, icon: '🐍', color: 'bg-green-500' },
    { name: 'React', level: 80, icon: '⚛️', color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, icon: '🟨', color: 'bg-yellow-500' },
    { name: 'Java', level: 95, icon: '🟠', color: 'bg-orange-500' },
    { name: 'C++', level: 90, icon: '🎨', color: 'bg-blue-600' },
    { name: 'C#', level: 80, icon: '🟢', color: 'bg-green-600' },
    { name: 'SQL', level: 80, icon: '📝', color: 'bg-gray-700' },
    { name: 'MongoDB', level: 70, icon: '🍃', color: 'bg-green-700' }
  ];

  const projects = [
    {
      title: 'Realized Vision (Android E-Commerce App)',
      description: 'Full-stack development on an Android application that serves for vendors to post work, for people to request commissions, or for people to take classes and learn skills.',
      image: '🛍️',
      tags: ['Java', 'XML', 'React', 'AndroidStudio'],
      codeUrl: "https://github.com/KevinNguyen-GitHub/Realized_Vision"
    },
    {
      title: 'C# Chess Game',
      description: 'A productivity app for managing tasks with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: '♟️',
      tags: ['C#', 'XML', 'AvaloniaUI', 'RESTful API'],
      codeUrl: '#'
    },
    {
      title: 'End-to-End IOT System',
      description: 'A beautiful weather application with location-based forecasts, interactive charts, and responsive design.',
      image: '⏲️',
      tags: ['Python', 'MongoDB'],
      codeUrl: 'https://github.com/davidramirez116/CECS327Assignment8Group34'
    },
    {
      title: 'Rain Prediction using Machine Learning ',
      description: 'A beautiful weather application with location-based forecasts, interactive charts, and responsive design.',
      image: '🌤️',
      tags: ['Python', 'TensorFlow', 'Sci-kit', 'Pandas', 'Seaborn'],
      codeUrl: '#'
    }
  ];

  return (
    <div className="text-gray-800 font-sans">
      <nav className="fixed w-full bg-white shadow-lg z-50 transition-all duration-300">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-4xl font-bold gradient-text text-blue-700">David Ramirez</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Fixed Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-200 ease-in-out transform origin-top">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">Home</a>
                <a href="#about" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">About</a>
                <a href="#projects" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">Projects</a>
                <a href="#skills" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">Skills</a>
                <a href="#contact" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="w-max-9xl bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-rows-2 md:grid-cols-2 gap-4 ">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 gradient-text">David Ramirez</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">Software Developer</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              I am a computer science graduate with experience in mobile development, web development, machine learning, and data analysis, in combination with my excellent teamwork and communication skills
            </p>
            <div className="flex flex-row sm:flex-row gap-4 mb-5">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center">
                Contact Me
              </a>
              <a href="#projects" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 text-center">
                View Work
              </a>
            </div>
          </div>
          {/* Headshot */}
          <div className="flex">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 shadow-2xl">
                <div className="bg-white rounded-full p-2">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="text-9xl"><img src={headshot} alt="Headshot" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-blue-600 md:text-4xl font-bold text-center mb-12">
            <span className='text-black'>About</span> Me
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-9xl"><img src={headshot} alt="Headshot" /></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who am I?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                I'm a passionate developer with experience with React, JavaScript, and modern web technologies. 
                I love learning new technologies and creating projects that use them. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Along with experience in web development, my experience in mobile development includes creating a fluid e-commerce application for users with complete functionality and many features.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600">👤</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Name:</span>
                    <br />
                    <span className="text-gray-800">David Ramirez</span>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-800">✉️</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Email:</span>
                    <br />
                    <span className="text-gray-800">davidramirez.lb11@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600">📍</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Location:</span>
                    <br />
                    <span className="text-gray-800">Santa Ana, CA</span>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600">🎓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Education:</span>
                    <br />
                    <span className="text-gray-800">B.S Computer Science (2025)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.codeUrl} 
                      className="flex-1 border border-gray-300 hover:border-gray-400 bg-blue-600 text-white hover:text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors text-center"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Projects
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-xl font-semibold mb-8 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl bg-blue-200">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">davidramirez.lb11@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl text-green-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (657) 859-0773</p>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-xl text-gray-800">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/david-ramirez-405451220/" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-xl"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png?20210220164014" alt="LinkedIn" /></span>
                  </a>
                  <a href="https://github.com/davidramirez116" className="w-10 h-10 bg-white-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <span className="text-xl"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/768px-Font_Awesome_5_brands_github.svg.png?20181017221208" alt="Github" /></span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Message Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="user_name" // Add name attribute
                      required // Add validation
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="user_email" // Add name attribute
                      required // Add validation
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" // Add name attribute
                    required // Add validation
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" // Add name attribute
                    rows="6" 
                    required // Add validation
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-row gap-8 mb-4 md:mb-0">
              <span className="text-xl font-bold text-blue-400">Portfolio</span>
              <p className="text-gray-400 mt-2">Building amazing digital experiences</p>
            </div>
            
            <div className="flex flex-row sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; David Ramirez, 2025</p>
          </div>
        </div>
      </footer>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>


    </div>
  );
}