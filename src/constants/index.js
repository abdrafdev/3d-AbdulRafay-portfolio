import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Blockchain Engineer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Downtown Creative LLC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022 - June 2024",
    points: [
      "Assisted in developing landing pages and marketing websites for various clients.",
      "Converted Figma designs into fully functional, responsive websites.",
      "Implemented modern web technologies including React, Next.js, and Tailwind CSS.",
      "Ensured cross-browser compatibility and optimized website performance.",
    ],
  },
  {
    title: "Blockchain Engineer",
    company_name: "Devotiv",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Designed and developed responsive web interfaces for blockchain-based client projects.",
      "Enhanced user experience with reusable React components and modern UI patterns.",
      "Integrated smart contracts and Web3 technologies into web applications.",
      "Focused on cross-browser compatibility and accessibility standards.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Aun Digital",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2024 - March 2025",
    points: [
      "Built and optimized modern UI components using React and Next.js.",
      "Collaborated with backend team for seamless API integration and data flow.",
      "Improved SEO and performance with advanced rendering strategies.",
      "Implemented responsive designs and ensured optimal user experience across devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abdul Rafay's blockchain expertise transformed our tax transparency project. His innovative approach and technical skills are exceptional.",
    name: "Sarah Johnson",
    designation: "CEO",
    company: "TechVentures",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Abdul Rafay was incredible. He seamlessly integrated AI and blockchain technologies to deliver cutting-edge solutions.",
    name: "Michael Chen",
    designation: "Product Manager",
    company: "InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Abdul Rafay's full-stack and blockchain expertise helped us build a revolutionary platform. His dedication and innovation are unmatched!",
    name: "Emily Rodriguez",
    designation: "CTO",
    company: "StartupHub",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PakTaxChain",
    description:
      "Blockchain-based tax transparency platform with MetaMask integration, real-time dashboards, and PPKR token minting 1:1 with PKR payments. Revolutionizing tax collection with blockchain transparency.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "smartcontracts",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://paktaxchain.vercel.app/",
  },
  {
    name: "3D Book Slider",
    description:
      "Interactive 3D book slider using Three.js and React for a modern, realistic UI experience. Features smooth animations, realistic page turning effects, and responsive design.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "3danimation",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://3d-book-slider-alpha.vercel.app/",
  },
  {
    name: "Hotel Management System",
    description:
      "Comprehensive web-based system for hotel reservations, room management, and customer tracking. Features real-time availability, booking management, and analytics dashboard.",
    tags: [
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abdrafdev/Hotel-management-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
