
import React, { useState, useEffect } from 'react';
import Sparcx from './Sparcx';
import {motion } from 'framer-motion';
import './App.css';

// Team member data with enhanced profiles
const teamMembers = [
  {
    id: 1,
    name: "Adepu Sanjay",
    position: "Full Stack Developer",
    image: "/sanjay.jpg",
    bio: "🚀 Full-Stack Developer with 4+ years of experience building scalable web applications using React, Node.js, Express, and MongoDB. Skilled in designing REST APIs, database optimization, and cloud deployment on AWS & Docker. Passionate about crafting seamless user experiences while maintaining robust backend systems.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    linkedin: "https://linkedin.com/in/sanjay-adepu",
    github: "https://github.com/sanjayadepu",
    portfolio: "https://sanjayadepu.dev",
    expertise: ["Full Stack Development", "API Design", "Cloud Deployment", "Database Optimization"]
  },
  {
    id: 2,
    name: "Katikola Karthik",
    position: "Full Stack Developer",
    image: "/karthik.jpg",
    bio: "Dynamic Full-Stack Engineer specializing in JavaScript, TypeScript, Next.js, and PostgreSQL. Experienced in Agile workflows, CI/CD pipelines, and microservices architecture. Adept at bridging the gap between design and functionality, ensuring end-to-end delivery of high-quality products.",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "CI/CD"],
    linkedin: "https://linkedin.com/in/karthik-katikola",
    github: "https://github.com/karthikkatikola",
    portfolio: "https://karthikkatikola.dev",
    expertise: ["TypeScript", "Next.js", "Microservices", "Agile Development"]
  },
  {
    id: 3,
    name: "Byagari Vinay",
    position: "Full Stack Developer",
    image: "/vinay.jpg",
    bio: "Versatile Full-Stack Developer with expertise in Python (Django/Flask), Angular, and MySQL. Strong background in developing SaaS platforms, integrating third-party APIs, and leading cross-functional teams. Focused on delivering secure, maintainable, and high-performance applications.",
    skills: ["Python", "Django", "Angular", "MySQL"],
    linkedin: "https://linkedin.com/in/vinay-byagari",
    github: "https://github.com/vinaybyagari",
    portfolio: "https://vinaybyagari.dev",
    expertise: ["Python Development", "SaaS Platforms", "API Integration", "Team Leadership"]
  },
  {
    id: 4,
    name: "Chamakuri Naveen",
    position: "Frontend Developer",
    image: "/naveen1.jpg",
    bio: "Creative Frontend Developer skilled in React.js, Tailwind CSS, and modern UI/UX principles. Dedicated to building responsive, user-friendly interfaces that combine aesthetics with functionality.",
    skills: ["React.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
    linkedin: "https://linkedin.com/in/naveen-chamakuri",
    github: "https://github.com/naveenchamakuri",
    portfolio: "https://naveenchamakuri.dev",
    expertise: ["Frontend Development", "UI/UX Design", "Responsive Design", "Modern Web Technologies"]
  }
];

// Enhanced projects data
const projects = [
  {
    id: 1,
    title: "QuantumFlow Platform",
    description: "Next-generation quantum computing platform revolutionizing financial modeling and drug discovery.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    category: "AI/ML",
    year: "2024",
    status: "Active",
    techStack: ["Python", "TensorFlow", "AWS", "React"],
    client: "Fortune 500 Financial Institution",
    impact: "40% faster financial modeling, $50M+ in cost savings"
    
  },
  {
    id: 2,
    title: "EcoSmart Solutions",
    description: "Sustainable technology platform helping cities reduce carbon footprint through smart infrastructure.",
    image: "https://images.unsplash.com/photo-1544191697-fd8a43f4a7b3?w=600&h=400&fit=crop",
    category: "Sustainability",
    year: "2023",
    status: "Completed",
    techStack: ["IoT", "Node.js", "MongoDB", "Vue.js"],
    client: "City of San Francisco",
    impact: "30% reduction in carbon emissions, deployed in 15+ cities"
  },
  {
    id: 3,
    title: "NeuroLink Interface",
    description: "Revolutionary brain-computer interface technology for medical applications and accessibility.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Healthcare",
    year: "2024",
    status: "Active",
    techStack: ["C++", "Python", "TensorFlow", "React Native"],
    client: "Leading Medical Research Institute",
    impact: "FDA approval pending, clinical trials showing 85% success rate"
  },
  {
    id: 4,
    title: "CryptoVault Security",
    description: "Advanced blockchain security platform protecting digital assets for institutional investors.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    category: "Blockchain",
    year: "2023",
    status: "Completed",
    techStack: ["Solidity", "Ethereum", "Node.js", "React"],
    client: "Major Investment Bank",
    impact: "Securing $2B+ in digital assets, zero security breaches"
  }
];

// Services data
const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Custom AI solutions for business automation, predictive analytics, and intelligent decision-making.",
    icon: "fas fa-brain",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
  },
  {
    id: 2,
    title: "Quantum Computing",
    description: "Next-generation quantum algorithms and platforms for complex computational problems.",
    icon: "fas fa-atom",
    features: ["Quantum Algorithms", "Financial Modeling", "Drug Discovery", "Optimization Problems"]
  },
  {
    id: 3,
    title: "Sustainable Technology",
    description: "Green tech solutions for environmental impact reduction and sustainable business practices.",
    icon: "fas fa-leaf",
    features: ["Carbon Footprint Tracking", "Smart Grid Solutions", "Renewable Energy Integration", "Waste Management"]
  },
  {
    id: 4,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services for modern business operations.",
    icon: "fas fa-digital-tachograph",
    features: ["Cloud Migration", "Legacy System Modernization", "Process Automation", "Data Strategy"]
  }
];

// Tech stacks data
const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" }
    ]
  },
  {
    category: "AI/ML",
    technologies: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
    ]
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    position: "CTO, TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "Sparcx transformed our entire data infrastructure. Their AI solutions increased our efficiency by 300% and saved us millions in operational costs.",
    rating: 5
  },
  {
    id: 2,
    name: "David Kim",
    position: "CEO, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with Sparcx was a game-changer. Their quantum computing platform solved problems we thought were impossible.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "VP Engineering, GreenTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The sustainable technology solutions from Sparcx helped us achieve our carbon neutrality goals ahead of schedule.",
    rating: 5
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('sparcx-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Auto-detect active section based on scroll position
      const sections = ['home', 'about', 'services', 'tech-stacks', 'projects', 'team', 'testimonials', 'why-choose-us', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('sparcx-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* <div className="nav-logo"> */}
          {/* <img src="/logo3.png"  */}
 {/* alt="Sparcx Solutions" className="company-logo" /> */}
           
          {/* </div> */}
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
              Services
            </button>
            <button onClick={() => scrollToSection('tech-stacks')} className={activeSection === 'tech-stacks' ? 'active' : ''}>
              Tech Stacks
            </button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </button>
            <button onClick={() => scrollToSection('team')} className={activeSection === 'team' ? 'active' : ''}>
              Team
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </button>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
            About
          </button>
          <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
            Services
          </button>
          <button onClick={() => scrollToSection('tech-stacks')} className={activeSection === 'tech-stacks' ? 'active' : ''}>
            Tech Stacks
          </button>
          <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </button>
          <button onClick={() => scrollToSection('team')} className={activeSection === 'team' ? 'active' : ''}>
            Team
          </button>
          <button onClick={() => scrollToSection('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>
            Testimonials
          </button>
          <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </button>
          <button onClick={toggleTheme} className="theme-toggle-mobile" aria-label="Toggle theme">
            <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      


      <section id="home" className="hero">
        <div className="hero-content">
      
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Sparcx</span>
              <br />
              <span className="hero-subtitle">Innovating Tomorrow</span>
            </h1>
            <p className="hero-description">
              We are a cutting-edge technology company pushing the boundaries of innovation 
              in AI, quantum computing, and sustainable solutions.As a dedicated team of full stack developers, we create reliable, high-performance digital products tailored to your goals.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                View Our Work
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('team')}>
                Meet Our Team
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Sparcx</h2>
            <p className="section-subtitle">Pioneering the future of technology</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Founded in 2020, Sparcx has emerged as a leading force in technological innovation, 
                specializing in artificial intelligence, quantum computing, and sustainable technology solutions. 
                Our mission is to solve humanity's greatest challenges through cutting-edge technology.
              </p>
              <p>
                With a team of world-class engineers, designers, and business strategists, 
                we've delivered groundbreaking solutions that have transformed industries 
                and improved lives across the globe.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$100M+</div>
                <div className="stat-label">Revenue Generated</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions for modern businesses</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stacks Section */}
      <section id="tech-stacks" className="tech-stacks">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technology Stacks</h2>
            <p className="section-subtitle">Cutting-edge technologies we master</p>
          </div>
          <div className="tech-stacks-grid">
            {techStacks.map((stack, index) => (
              <div key={index} className="tech-stack-category">
                <h3 className="tech-category-title">{stack.category}</h3>
                <div className="tech-items">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <img src={tech.logo} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Innovation that transforms industries</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-status">{project.status}</div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-impact">
                    <h4>Impact:</h4>
                    <p>{project.impact}</p>
                  </div>
                  <button className="project-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">Meet the visionaries behind Sparcx</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={member.github} className="social-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={member.portfolio} className="social-link portfolio-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-expertise">
                    <h4>Expertise:</h4>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="member-skills">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">What our clients say about us</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}>
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.content}"</p>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Sparcx</h2>
            <p className="section-subtitle">The competitive advantages that set us apart</p>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation First</h3>
              <p>We stay ahead of the curve with cutting-edge technologies and innovative solutions that drive real business value.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Team</h3>
              <p>Our team consists of industry experts with proven track records from top tech companies and research institutions.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality assurance processes ensure reliable, scalable, and secure solutions.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Agile methodologies and efficient processes enable us to deliver high-quality solutions on time and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to innovate together?</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>hello@sparcx.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="quantum">Quantum Computing</option>
                    <option value="sustainable">Sustainable Technology</option>
                    <option value="digital">Digital Transformation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    
              
        
      
    </div>
  );
}

export default App;
