import { useState, useEffect} from 'react'
import './App.css'

const Portfolio = () =>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const[isVisible, setIsVisible] = useState(false)

  // useEffect = (() =>{

  //   const handleScroll = () =>{
  //     if(window.pageYOffset > 300){
  //       setIsVisible(true);
  //     }else{
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return() =>{
  //     window.removeEventListener('scroll', handleScroll);
  //   };

  // },[]);


  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handleFormSubmission = (e) =>{
    e.preventDefault();
    alert("Form submitted");
    e.target.reset()
  }

  return (
    <div className="bg-gray-50 text-gray-700 font-sans">
      {/* Navbar */}
      <nav className = "fixed w-full bg-white shadow-md z-50">
        <div className = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className = "flex justify-between h-16">
            {/* Branding */}
            <div className = "flex-shrink-0 flex items-center">
              <a href="#" className = "text-lg font-bold gradient-text">My Portfolio</a>
            </div>
            {/* Navbar elements */}
            <div className = "hidden md:flex items-center space-x-8">
              <a href="#about" className = "text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#projects" className = "text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className = "text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#contact" className = "text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className = "md:hidden flex items-center">
              <button onClick={() =>{setMobileMenuOpen(!mobileMenuOpen)}}
              className='text-gray-700 hover:text-blue-600 transition'
                >
                  <i className = "fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'block' : 'hidden'}`}>          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/*Hero Section*/}
      <section id = "home" className = "pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className = "flex flex-col items-center">
          {/* Hero Content */}
          <div className = "md:w-1/2 mb-10 md:mb-0">
          <h1 className = "text-4xl md:text-5xl font-bold mb-4">Hi, I'm   
            <span className = "gradient-text">  David Ramirez</span>
          </h1>
          <h2 className = "text-2xl md:text-3xl font-semibold mb-4 text-gray-600">
            Developer, Analyst
          </h2>
          <p className = "text-gray-500 leading-relaxed">
            I am an aspiring developer with experience in Mobile Development, Web Development, and Machine Learning, in combination
            with my teamwork and communication skils
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className = "bg-blue-600 hover:bg-blue-700 text-white  px-6 py-3 rounded-lg font-medium transition shadow-md text-center">
              Contact Me
            </a>
            <a href="#projects" className = "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md text-center">
              View Work
            </a>
          </div>
          </div>
          {/* Hero Image */}
          <div className = "md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className = "bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-2">
            <div className = "rounded-full w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-400 shadow-xl flex items-center justify-center text-white text-5xl ">
              <span>
                <img src="assets\headshot2.jpeg" alt="Headshot" />
              </span>
            </div>

          </div>
          </div>
        </div>
      </section>
      {/*About section  */}
      <section id = "about" className = " py-20 bg-gray-200">
        
      </section>

    </div>
  )
}

export default Portfolio
