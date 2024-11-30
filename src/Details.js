// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/Python.png";
import djangofullstack from "./assets/techstack/fullstackdjango.jpg"
import flaskdjango from "./assets/techstack/FlaskDjango.jpg"
import pythonaws from "./assets/techstack/pythonaws.jpg"
import pipenv from "./assets/techstack/pipenv.png"
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ben Santos",
  tagline: "I build things for web",
  img: profile,
  about: `Highly accomplished Senior Python Engineer with 5+ years of experiences in designing, developing, and optimizing robust web applications using Django and Flask frameworks.Proficient in building scalable back-end architectures and integrating APIs to deliver innovative solutions that drive business growth. Adept at leading cross-functional teams and collaborating with stakeholders to achieve project objectives. Seeking a challenging role as a Senior Python Engineer, where I can leverage my deep knowledge of Django and Flask to contribute to cutting-edge projects and mentor aspiring developers.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Senior Python Developer",
    Company: `Accenture Philippines`,
    Location: "Makati City, Philippines",
    Type: "Full Time",
    Duration: "2021 – Present",
    descriptions: ['Designed and developed robust full-stack web applications using Flask, RESTful APIs, and front-end technologies like React and JavaScript, serving diverse enterprise clients.',
      'Led the migration of critical systems to AWS cloud infrastructure, utilizing services such as Lambda, S3, and RDS, improving scalability and reducing operational costs by 20%.',
      'Architected and implemented secure, high-performance back-end solutions, improving API response times by 30% through optimized code and caching techniques.',
      'Collaborated with cross-functional teams to deliver Agile-based projects, consistently achieving milestones ahead of schedule.',
      'Automated CI/CD pipelines using Docker and GitHub Actions, reducing deployment times by 50%.',
      'Automated CI/CD pipelines using Docker and GitHub Actions, reducing deployment times by 50%.'
    ]
  },
  {
    Position: "Jonior Python Developer",
    Company: `Globe Telecom`,
    Location: "Bonifacio Global City (BGC), Taguig, Philippines",
    Type: "Full Time",
    Duration: "2020 – 2021",
    descriptions: [
      'Developed and maintained RESTful APIs for large-scale telecom applications, ensuring seamless integration with third-party services.',
      'Built dynamic dashboards for monitoring network performance using Flask, SQL, and visualization tools like Plotly',
      'Leveraged AWS tools to implement cost-effective cloud solutions, enabling real-time data processing and storage',
      'Optimized back-end processes, reducing latency in data retrieval by 25% and enhancing user experience.',
      'Created containerized microservices using Docker, streamlining development and deployment workflows.'
    ]
  },
  {
    Position: "Fullstack Developer",
    Company: `Smart Communications`,
    Location: "Ortigas Center, Pasig City, Philippines",
    Type: "Full Time",
    Duration: "2018 – 2020",
    descriptions: ['Developed customer-facing applications using Python (Flask) for the back-end and modern front-end frameworks like React.js',
      'Designed and implemented relational databases (PostgreSQL) to manage high volumes of customer data efficiently',
      'Integrated payment gateways and third-party APIs, enabling real-time transaction processing for telecom services.',
      'Enhanced application performance by identifying bottlenecks and refactoring code, resulting in a 15% reduction in processing times.',
      'Participated in requirements gathering and ensured the timely delivery of high-quality software aligned with business objectives.']
  },
];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan  - Present",
  // },
  {
    Position: "BS in Computer Science",
    Company: `Philippine Christian University`,
    Location: "Phillipine",
    Type: "Full Time",
    Duration: "Aug 2014 - 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: python,
  djangofullstack: djangofullstack,
  flaskdjango: flaskdjango,
  pythonaws: pythonaws,
  pipenv: pipenv
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Accenture Philippines - Full-Stack Web Application",
    image: projectImage1,
    description: `Designed and developed full-stack web applications for enterprise clients using Flask and React,
                    improving business operations and user experience. Led migration efforts to AWS cloud, reducing
                    operational costs by 20%.`,
    techstack: "Backend:Flask AWS:Docker,Lamda",
    previewLink: "https://www.accenture.com/ph-en",
    // githubLink: "https://github.com",
  },
  {
    title: "Globe Telecom - Telecom Application",
    image: projectImage2,
    description: `Developed and maintained RESTful APIs for large-scale telecom applications. Enhanced network
                    performance monitoring and integrated third-party services to improve system efficiency and customer
                    service.`,
    techstack: "Backend:Django-Rest DB:MongoDB ",
    previewLink: "https://www.globe.com.ph/",
    // githubLink: "https://github.com",
  },
  {
    title: "Smart Communications - Customer-Facing App",
    image: projectImage3,
    description: `Developed the backend for Smart's customer-facing mobile app, including payment gateway integration
                    and real-time transaction processing. Helped reduce latency and improved transaction reliability.`,
    techstack: "Backend:DjangoRest AWS:Docker",
    previewLink: "https://smart.com.ph/",
    // githubLink: "https://github.com",
  },
  {
    title: "UnionBank - Cloud-based Banking Solution",
    image: projectImage4,
    description: `Architected and deployed cloud-based banking solutions using AWS services. The project enhanced
                    customer engagement and transaction speed with improved backend infrastructure and data management.`,
    techstack: "Python(Flask) AWS:Docker",
    previewLink: "https://www.unionbankph.com/",
    // githubLink: "https://github.com",
  },
  {
    title: "BDO Unibank - Real-time Banking APIs",
    image: projectImage5,
    description: `Developed backend APIs for real-time banking services. Integrated third-party services to enhance
                    security and streamline transaction processing for BDO clients.`,
    techstack: "MERN stack",
    previewLink: "https://www.bdo.com.ph/",
    // githubLink: "https://github.com",
  },
  {
    title: "Cebu Pacific - Airline Booking System",
    image: projectImage6,
    description: `Designed and developed a scalable backend system for handling online flight bookings and payment
                    integrations, ensuring high availability during peak traffic times.`,
    techstack: "Vue.js PostgreSql",
    previewLink: "https://www.cebupacificair.com/",
    // githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "jw7889208@gmail.com",
  telegram: "+91 12345 67890",
};
