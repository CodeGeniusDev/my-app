export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// ================= GRID ITEMS =================

export const gridItems = [
  {
    id: 1,
    title: "I work closely with clients to build great digital products.",
    description:
      "From idea to launch, I make sure everything is clear and on time.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones",
    description: "I adjust my schedule to work smoothly with global clients",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I love building modern and useful websites.",
    description: "Focused on clean design and strong frontend skills.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building a JavaScript animation library.",
    description: "Making animations simple and smooth for developers.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to work together?",
    description: "Let’s build a fast and modern web app for your idea.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// ================= PROJECTS (REAL DATA) =================

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    des: "My professional portfolio showcasing my projects, skills, and experience as a full-stack web developer.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://abdullah-portfolio-web-eight.vercel.app/",
  },
  {
    id: 2,
    title: "WealthX — Finance Tracker App",
    des: "A smart finance tracking app to manage income and expenses with a clean UI and real-time insights.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://wealthx.netlify.app/",
  },
  {
    id: 3,
    title: "Decoricks Finance Tracker",
    des: "A simple yet powerful finance manager built to help users track spending and stay organized.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://decofin.netlify.app/",
  },
  {
    id: 4,
    title: "ShopFluence — E-commerce Store",
    des: "A modern e-commerce website built with Next.js and Tailwind, featuring smooth UI and fast performance.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://shopfluencestore.vercel.app/",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    des: "A responsive weather application that shows real-time forecasts using public APIs.",
    img: "/p4.svg",
    iconLists: ["/git.svg", "/next.svg", "/tail.svg"],
    link: "https://weather-app-ruby-rho-93.vercel.app/",
  },
  {
    id: 6,
    title: "Headphone Product Landing Page",
    des: "A clean and modern landing page designed to showcase a headphones brand with engaging visuals.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/git.svg"],
    link: "https://headphone-landing-page-seven.vercel.app/",
  },
];

// ================= TESTIMONIALS =================

export const testimonials = [
  {
    quote:
      "Working with Abdullah was a great experience. He built our company website exactly as we wanted — professional, modern, and user-friendly.",
    name: "Hasnat",
    title: "Client - Jinnah Expert Solar",
    img: "/Hasnat.jpg",
  },
  {
    quote:
      "Abdullah did an excellent job on my WordPress site. He understood my requirements clearly and delivered a clean, functional website on time.",
    name: "Zeeshan Asif",
    title: "Client - WordPress Website",
    img: "/Zeeshan.jpg",
  },
  {
    quote:
      "Abdullah has strong frontend skills and a great eye for design. I highly recommend him for modern web projects.",
    name: "Zuraiz Malik",
    title: "Client - WordPress Website",
    img: "/Zuraiz.png",
  },
  {
    quote:
      "Delivered the project on time with excellent code quality and clean design.",
    name: "Syeda Dua",
    title: "Client - Web & Design Services",
    img: "/Dua.png",
  },
  {
    quote:
      "Great experience working together. The landing page was delivered on time with a clean, modern, and responsive design.",
    name: "Taaha Malik",
    title: "Client - Landing Page",
    img: "/Taaha.jpg",
  },
];

// ================= COMPANIES =================

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// ================= WORK EXPERIENCE =================

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Worked on a React-based platform, improving UI components and enhancing overall user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Web Developer — Self-employed",
    desc: "Built complete web applications using React.js and Next.js for frontend and backend, respectively, with modern tools for APIs, authentication, and data handling.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Freelance Full Stack Developer",
    desc: "Delivered end-to-end solutions for clients, from planning and design to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Led frontend development using modern stacks, focusing on performance, scalability, and clean UI.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// ================= SOCIAL MEDIA =================

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/CodeGeniusDev",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/codegenius.dev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdullah-abbad",
  },
  {
    id: 4,
    img: "/wha.svg",
    link: "https://wa.me/923291540015",
  },
];
