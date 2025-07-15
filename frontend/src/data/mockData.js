import { Calendar, MapPin, Phone, Mail, Users, Award, Code, Target } from 'lucide-react';

export const mockData = {
  profile: {
    name: "Prachi Agarwal",
    title: "Full Stack Developer",
    tagline: "Passionate about creating innovative solutions and beautiful user experiences through code",
    image: "https://images.unsplash.com/photo-1494790108755-2616b96e7b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    email: "prachi.agarwal@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    social: {
      github: "https://github.com/prachi-agarwal",
      linkedin: "https://linkedin.com/in/prachi-agarwal",
      twitter: "https://twitter.com/prachi_agarwal",
      instagram: "https://instagram.com/prachi_agarwal"
    }
  },

  about: {
    title: "Full Stack Developer & UI/UX Enthusiast",
    description: "I'm a passionate full stack developer with 3+ years of experience creating digital experiences that combine beautiful design with robust functionality. I love turning complex problems into simple, elegant solutions.",
    details: "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through technical writing. I believe in continuous learning and staying updated with the latest trends in web development.",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b96e7b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    info: [
      { icon: Calendar, label: "Age", value: "25 Years" },
      { icon: MapPin, label: "Location", value: "Mumbai, India" },
      { icon: Phone, label: "Phone", value: "+91 9876543210" },
      { icon: Mail, label: "Email", value: "prachi.agarwal@example.com" }
    ],
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Node.js/Express", level: 90 },
      { name: "JavaScript/TypeScript", level: 92 },
      { name: "Python/Django", level: 88 },
      { name: "MongoDB/PostgreSQL", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ]
  },

  resume: {
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Pvt Ltd",
        period: "2022 - Present",
        description: "Lead developer for multiple high-traffic web applications serving 100K+ users. Specializing in React, Node.js, and cloud architecture.",
        achievements: [
          "Architected and deployed 5 major web applications",
          "Improved application performance by 40% through optimization",
          "Mentored 3 junior developers and led code reviews",
          "Implemented CI/CD pipelines reducing deployment time by 60%"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions Agency",
        period: "2021 - 2022",
        description: "Developed responsive web applications for various clients using modern JavaScript frameworks and backend technologies.",
        achievements: [
          "Successfully delivered 12 client projects on time",
          "Integrated third-party APIs and payment gateways",
          "Collaborated with design teams to implement pixel-perfect UIs",
          "Maintained 98% client satisfaction rate"
        ]
      },
      {
        title: "Junior Developer",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description: "Started my career working on various web development projects, gaining experience in both frontend and backend development.",
        achievements: [
          "Learned React, Node.js, and database management",
          "Contributed to 8 different projects",
          "Participated in agile development processes",
          "Received 'Rising Star' award for exceptional performance"
        ]
      }
    ],
    education: [
      {
        title: "Bachelor of Technology in Computer Science",
        institution: "Mumbai University",
        period: "2016 - 2020",
        description: "Graduated with First Class Honors. Specialized in Software Engineering and Data Structures. Active member of coding club and technical societies.",
        achievements: [
          "CGPA: 8.7/10",
          "Winner of inter-college coding competition",
          "Led the web development team for college fest",
          "Published research paper on machine learning applications"
        ]
      },
      {
        title: "Higher Secondary Education",
        institution: "St. Xavier's College",
        period: "2014 - 2016",
        description: "Completed higher secondary education with focus on Science and Mathematics. Developed interest in programming and logical thinking.",
        achievements: [
          "Scored 92% in HSC examinations",
          "President of Computer Science Club",
          "Participated in state-level science exhibition",
          "Won district-level mathematics olympiad"
        ]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023"
      },
      {
        name: "Google Cloud Professional",
        issuer: "Google Cloud Platform",
        date: "2023"
      },
      {
        name: "React Advanced Certification",
        issuer: "Meta",
        date: "2022"
      },
      {
        name: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2021"
      }
    ]
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/prachi-agarwal/ecommerce-platform",
      date: "2023"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/prachi-agarwal/task-manager",
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      liveUrl: "https://prachi-portfolio.com",
      githubUrl: "https://github.com/prachi-agarwal/portfolio",
      date: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard application with location-based forecasts, interactive maps, and weather alerts using external APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/prachi-agarwal/weather-dashboard",
      date: "2022"
    },
    {
      title: "Social Media App",
      description: "A social media application with user profiles, post sharing, real-time messaging, and social interactions.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Mobile",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://social-app-demo.com",
      githubUrl: "https://github.com/prachi-agarwal/social-media-app",
      date: "2022"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, quizzes, and progress tracking for students and instructors.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "JWT"],
      liveUrl: "https://lms-demo.com",
      githubUrl: "https://github.com/prachi-agarwal/lms-platform",
      date: "2022"
    }
  ],

  services: [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks and libraries.",
      icon: Code,
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      price: "₹25,000"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with secure APIs and database integration.",
      icon: Target,
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Authentication & Authorization",
        "Cloud Deployment"
      ],
      price: "₹30,000"
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment.",
      icon: Users,
      features: [
        "Complete Web Applications",
        "Custom CMS Development",
        "Third-party Integrations",
        "Maintenance & Support"
      ],
      price: "₹50,000"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences with modern design principles.",
      icon: Award,
      features: [
        "User Interface Design",
        "Wireframing & Prototyping",
        "User Experience Research",
        "Design System Creation"
      ],
      price: "₹20,000"
    },
    {
      title: "E-Commerce Solutions",
      description: "Building scalable online stores with payment integration and inventory management.",
      icon: Code,
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing System"
      ],
      price: "₹40,000"
    },
    {
      title: "Technical Consulting",
      description: "Providing expert advice on technology choices, architecture, and best practices.",
      icon: Target,
      features: [
        "Technology Stack Consultation",
        "Code Review & Optimization",
        "Architecture Planning",
        "Performance Audits"
      ],
      price: "₹15,000"
    }
  ],

  contact: {
    email: "prachi.agarwal@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    social: [
      { name: "GitHub", url: "https://github.com/prachi-agarwal", icon: "🐙" },
      { name: "LinkedIn", url: "https://linkedin.com/in/prachi-agarwal", icon: "💼" },
      { name: "Twitter", url: "https://twitter.com/prachi_agarwal", icon: "🐦" },
      { name: "Instagram", url: "https://instagram.com/prachi_agarwal", icon: "📷" }
    ]
  }
};