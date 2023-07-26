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
  htss,
  cgk,
  bst,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  patientsHub,
  fbClone,
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
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Fullstack Engineer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Frontend Engineer",
    company_name: "Cegeka",
    icon: cgk,
    iconBg: "#383E56",
    date: "February 2023 - May 2023",
    points: [
      "Collaborated with a team of developers to create a sophisticated healthcare management app using ReactJS.",
      "Gained hands-on experience with Git, CSS, HTML, JavaScript, and React, through comprehensive lessons and practical assignments.",
      "Developed the frontend of the app, which included features such as detailed patient management capabilities, hospital-wide dashboard with filter options, and four authentication pages.",
      "Demonstrated excellent teamwork skills, by effectively collaborating with other teams to develop the best version of the app.",
      "Successfully delivered a powerful and user-friendly app that provided healthcare specialists with the tools needed to monitor bed vacancies, hospital capacity, and patient data",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "HTSS",
    icon: htss,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Led the development of new functionalities and addressed technical issues for an older application to enhance the overall user experience.",
      "Utilized a range of tools, including C#, .Net Framework Core, and SQL Server to manage backend operations, while Angular was selected to handle the frontend aspect of the application",
      "Strategically approached the project to maximize performance, ensuring that the application operated seamlessly and was fully optimized for end-users.",
      "Collaborated with cross-functional teams to ensure efficient communication and delivery of high-quality work.",
      "Successfully delivered an optimized and highly functional application that improved the overall user experience.",
    ],
  },
  {
    title: "Embedded Software Engineer",
    company_name: "BlueSpace Technology",
    icon: bst,
    iconBg: "#383E56",
    date: "Jul 2021 - Sep 2021",
    points: [
      "Developed and implemented innovative methods to gather, store, and analyze data from sensors inside machines.",
      "Tested and refined new techniques to improve accuracy and efficiency in data collection and analysis, contributing to overall machine performance.",
      "Conducted regular maintenance on circuit boards to ensure smooth operation of embedded systems.",
      "Collaborated with cross-functional teams to troubleshoot and resolve technical issues related to embedded software and hardware.",
      "Consistently improved machine performance and reliability through proactive maintenance and data analysis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Patients Hub",
    description:
      "Healthcare management app, designed for       hospital staff, features a comprehensive       dashboard displaying patient data, including       room numbers, bed vacancies, and hospital       capacity. Patients can be filtered by       department, and the app offers four       authentication pages for registration, login,       and password management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react context",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: patientsHub,
    source_code_link: "https://github.com/AlinSterie/patients-hub",
  },
  {
    name: "Rent a Bike",
    description:
      "As a bike lover I want to see details about the bike stations (as name, amount of available bikes and total / maximum amount of bikes at that station). Also, I should be interested about the parkings (name and available capacity of the parking) so that I can make an idea about public parkings in my city with a capacity of 50% or more available.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AlinSterie/rn-case-2023",
  },
  {
    name: "Facebook Clone",
    description:
      "A comprehensive social media platform that allows users to create posts and offers live interactions with friends from all over the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fbClone,
    source_code_link: "https://github.com/AlinSterie/fb-clone-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
