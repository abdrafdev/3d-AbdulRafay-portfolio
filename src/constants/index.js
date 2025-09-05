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
import crypto from "../assets/crypto.png";
import meat from "../assets/meat.jpg";
import raziqon from "../assets/raziqon.png";
import ml from "../assets/ml.png";
import hotel from "../assets/hotel.jpg";
import movie from "../assets/movie.png";
import earn from "../assets/earn.png";
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
      { name: "blockchain", color: "blue-text-gradient" },
      { name: "web3", color: "green-text-gradient" },
      { name: "smartcontracts", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://paktaxchain.vercel.app/",
  },
  {
    name: "Raziqon Blockchain",
    description:
      "Custom blockchain built from scratch in Rust. Features wallet creation, token transfers, and balance tracking via CLI. Future roadmap includes networking, consensus, and full decentralized deployment.",
    tags: [
      { name: "rust", color: "blue-text-gradient" },
      { name: "blockchain", color: "green-text-gradient" },
      { name: "cli", color: "pink-text-gradient" },
    ],
    image: raziqon,
    source_code_link: "https://github.com/abdrafdev/Raziqon/tree/master",
  },
  {
    name: "AI/ML Projects",
    description:
      "A collection of applied machine learning projects including Random Forest classifiers, Explainable AI (XAI) experiments, and predictive modeling. Focused on combining interpretability with performance.",
    tags: [
      { name: "machinelearning", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "xai", color: "pink-text-gradient" },
    ],
    image: ml,
    source_code_link: "https://github.com/abdrafdev/machine-learning-projects",
  },
    {
    name: "Crypt-Forex-Web",
    description:
      "A web platform for crypto and forex trading dashboards. Features real-time market data, interactive charts, and secure wallet integration for simulated trading experiences. both crypto and forex in one platform. You can check it on My Github",
    tags: [
      { name: "forex", color: "blue-text-gradient" },
      { name: "crypto", color: "green-text-gradient" },
      { name: "dashboard", color: "pink-text-gradient" },
    ],
    image: crypto,
    source_code_link: "https://github.com/abdrafdev/Crypt-Forex-Web",
  },
    {
    name: "Movie Downloader (Laravel)",
    description:
      "Web application built with Laravel that allows users to download and manage movies. Features authentication, search, categorized movie lists, and a responsive user interface.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    image: movie,
    source_code_link: "https://github.com/abdrafdev/Movie-Downloader-Laravel",
  },
    {
    name: "Butcher Service",
    description:
      "Service platform for managing butcher shop orders and deliveries. Includes product catalog, order tracking, and customer management for a smooth e-commerce-like experience.",
    tags: [
      { name: "ecommerce", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: meat,
    source_code_link: "https://github.com/abdrafdev/Butcher-Service",
  },
  {
    name: "3D Book Slider",
    description:
      "Interactive 3D book slider using Three.js and React for a modern, realistic UI experience. Features smooth animations, realistic page turning effects, and responsive design and you can also visit this it also has my name on the cover and you can open and turn the pages by clicking with sound effects.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "3danimation", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://3d-book-slider-alpha.vercel.app/",
  },
  {
    name: "Hotel Management System",
    description:
      "Comprehensive web-based system for hotel reservations, room management, and customer tracking. Features real-time availability, booking management, and analytics dashboard.",
    tags: [
      { name: "fullstack", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: hotel,
    source_code_link: "https://github.com/abdrafdev/Hotel-management-system",
  },
  {
      name: "Play2EarnX",
    description:
      "Blockchain-based gaming platform where players earn cryptocurrency rewards through gameplay. Features NFT-based assets, in-game token economy, and smart contract integration for secure, transparent reward distribution.",
    tags: [
      { name: "blockchain", color: "blue-text-gradient" },
      { name: "nft", color: "green-text-gradient" },
      { name: "gaming", color: "pink-text-gradient" },
    ],
    image: earn,
    source_code_link: "https://github.com/abdrafdev/Play2EarnX",
  }
];


export { services, technologies, experiences, testimonials, projects };
