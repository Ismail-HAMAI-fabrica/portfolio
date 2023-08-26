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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Design Creator",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
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
    }
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "Fabrika",
      icon: nodejs,
      iconBg: "#383E56",
      date: " 2023 -  2023",
      points: [
        "Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Collaborate with a team of designers and developers to create responsive and user-friendly interfaces.",
        "Implement RESTful APIs to handle server-side logic and database interactions.",
        "Built responsive and user-friendly UI using React.js ",
        "Utilize Git for version control and collaborate with team members using agile methodologies."
      ],
    },
    {
      title: "Photoshop and figma Designer",
      company_name: "Freelance",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "Jan 2018- Feb 2022",
      points: [
        "Created and designed various graphic elements and visual assets using Adobe Photoshop.",
        "Worked with clients to understand their needs and requirements for branding, marketing, and advertising campaigns.",
        "Developed creative concepts and designed logos, brochures, flyers, posters, social media graphics, and other promotional materials.",
        "Contributed to the development of new ideas, tools, and techniques to enhance the agency's design capabilities.",
      ],
    },
    {
      title: "Network Administrator & Security Specialist",
      company_name: "SonelGaz",
      icon: backend,
      iconBg: "#383E56",
      date: "Jan 2019 - Fev 2021",
      points: [
        "Plan, design, implement, and maintain local area networks (LANs), wide area networks (WANs), and virtual private networks (VPNs) to ensure high availability and reliability of network infrastructure.",
        "Configure and maintain network devices, including switches, routers, firewalls, and intrusion prevention systems (IPS)",
        "Investigate and respond to security incidents, including malware infections, data breaches, and denial of service attacks",
        "Provide end-user support for network-related issues and troubleshoot network problems to ensure uninterrupted network service",
        "Keep up-to-date with emerging trends and technologies in network administration and security to ensure the organization remains competitive and secure."
      ],
    }
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
      name: "BNP Pariba",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ismail-HAMAI-fabrica/BNPprojact.git",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };