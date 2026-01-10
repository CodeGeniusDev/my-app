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
      "From idea to launch, I ensure clarity, quality, and on-time delivery.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones",
    description: "Comfortable working with clients across different regions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
    imgClassName: "",
    titleClassName: "justify-start text-center items-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always improving with tech.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I love building modern and useful websites.",
    description: "Focused on clean design and strong frontend experiences.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Always learning new technologies.",
    description: "Improving my skills with every project.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "Let’s build something great.",
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
    img: "/projects/Portfolio1.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/js.svg",
      "/gsap.svg",
      "/vs.svg",
      "/anal.svg",
    ],
    link: "https://abdullah-portfolio-web-eight.vercel.app/",
  },
  {
    id: 2,
    title: "WealthX — Finance Tracker App",
    des: "A smart finance tracking app to manage income and expenses with a clean UI and real-time insights.",
    img: "/projects/FinanceTracker.png",
    iconLists: ["/re.svg", "/tail.svg", "/bolt.svg", "/anal.svg"],
    link: "https://wealthx.netlify.app/",
  },
  {
    id: 3,
    title: "Decoricks Finance Tracker",
    des: "A simple yet powerful finance manager built to help users track spending and stay organized.",
    img: "/projects/DecoricksFinance.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/lovea.svg"],
    link: "https://decofin.netlify.app/",
  },
  {
    id: 4,
    title: "ShopFluence — E-commerce Store",
    des: "A modern e-commerce website built with Next.js and Tailwind, featuring smooth UI and fast performance.",
    img: "/projects/ShopFluence.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/npm.svg",
      "/fig.svg",
      "/wind.svg",
    ],
    link: "https://shopfluencestore.vercel.app/",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    des: "A responsive weather application that shows real-time forecasts using public APIs.",
    img: "/projects/WeatherApp.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://weather-app-ruby-rho-93.vercel.app/",
  },
  {
    id: 6,
    title: "Headphone Product Landing Page",
    des: "A clean and modern landing page designed to showcase a headphones brand with engaging visuals.",
    img: "/projects/Headphones.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://headphone-landing-page-seven.vercel.app/",
  },
  {
    id: 7,
    title: "Berry N Bloom E-commerce",
    des: "An elegant online store for premium beauty and skincare products with a focus on user experience.",
    img: "/projects/BerryNBloom.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/gsap.svg",
      "/supab.svg",
      "/npm.svg",
      "/wind.svg",
    ],
    link: "https://berrynbloom.netlify.app/",
  },
  {
    id: 8,
    title: "Binghatti Properties",
    des: "A luxury real estate website showcasing premium properties with immersive visuals and property listings.",
    img: "/projects/Binghatti.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/npm.svg", "/wind.svg"],
    link: "https://demobinghatti.netlify.app",
  },
  {
    id: 9,
    title: "Business Nexus CRM",
    des: "Comprehensive customer relationship management system for businesses to manage clients and sales.",
    img: "/projects/CRM.png",
    iconLists: ["/wordp.svg", "/anal.svg"],
    link: "https://commercialpropertymanagement.pk",
  },
  {
    id: 10,
    title: "Design Market UI Kit",
    des: "A modern UI component library for designers and developers to build beautiful interfaces faster.",
    img: "/projects/DesignMarket.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/npm.svg", "/wind.svg"],
    link: "https://design-market.netlify.app/",
  },
  {
    id: 11,
    title: "Dry Fruits E-commerce",
    des: "Specialty store for premium dry fruits and nuts with an intuitive shopping experience.",
    img: "/projects/DryFruits.png",
    iconLists: ["/wordp.svg", "/anal.svg"],
    link: "https://taenterprises.com.pk/",
  },
  {
    id: 12,
    title: "JX Solar Solutions",
    des: "Website for a solar energy company showcasing their services and sustainable energy solutions.",
    img: "/projects/JXSolar.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/node.svg",
      "/npm.svg",
      "/wind.svg",
      "/anal.svg",
    ],
    link: "https://jx-solar.netlify.app/",
  },
  {
    id: 13,
    title: "MyScheme - Task Manager",
    des: "Productivity app for managing daily tasks, projects, and deadlines with a clean interface.",
    img: "/projects/MyScheme.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/node.svg",
      "/mongo.svg",
      "/post.svg",
      "/wind.svg",
    ],
    link: "https://my-scheme.netlify.app/",
  },
  {
    id: 14,
    title: "Project Tracker Pro",
    des: "Web application for teams to track project progress, tasks, and deadlines in real-time.",
    img: "/projects/ProjectTracker.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/npm.svg",
      "/lovea.svg",
      "/anal.svg",
    ],
    link: "https://localtrack.netlify.app/",
  },
  {
    id: 15,
    title: "Puzzle Game Collection",
    des: "Interactive web-based puzzle games built with modern web technologies for engaging user experience.",
    img: "/projects/PuzzleGame.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://abdullah-portfolio-tau.vercel.app/assets/Web-game.html",
  },
  {
    id: 16,
    title: "Quiz Master App",
    des: "Interactive quiz application with various categories and real-time scoring system.",
    img: "/projects/QuizApp.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://scripters-app.netlify.app/",
  },
  {
    id: 17,
    title: "SeaFood Restaurant",
    des: "Modern restaurant website with online ordering system and menu showcase for seafood lovers.",
    img: "/projects/SeaFood.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/npm.svg", "/bolt.svg"],
    link: "https://demo-sea-food.netlify.app/",
  },
  {
    id: 18,
    title: "Spider Web Design",
    des: "Creative web design agency portfolio showcasing modern and innovative website designs.",
    img: "/projects/SpiderWeb.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/vs.svg"],
    link: "https://spider-web-snowy.vercel.app/",
  },
  {
    id: 19,
    title: "TrueFocus - Productivity App",
    des: "Minimalist productivity app designed to help users focus and manage their time effectively.",
    img: "/projects/TrueFocus.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/supab.svg",
      "/npm.svg",
      "/bolt.svg",
    ],
    link: "https://truefocus.netlify.app/",
  },
  {
    id: 20,
    title: "VideoHub - Video Platform",
    des: "Modern video sharing platform with user profiles, comments, and content discovery features.",
    img: "/projects/VideoHub.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/npm.svg", "/bolt.svg"],
    link: "https://videohubpro.netlify.app/",
  },
  {
    id: 21,
    title: "Luxury Watches Collection",
    des: "Elegant e-commerce platform for premium watches with high-quality product showcases.",
    img: "/projects/Watches.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://watch-web-pied.vercel.app/",
  },
  {
    id: 22,
    title: "Portfolio Design V1",
    des: "First iteration of my personal portfolio with a clean and minimal design approach.",
    img: "/projects/Portfolio2.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://portfolio-3-mu-green.vercel.app/",
  },
  {
    id: 23,
    title: "Portfolio Design V2",
    des: "Second version featuring enhanced UI/UX and improved project showcase layout.",
    img: "/projects/Portfolio3.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://abdullah-portfolio-tau.vercel.app/",
  },
  {
    id: 24,
    title: "Portfolio Design V3",
    des: "Latest portfolio iteration with modern animations and interactive elements.",
    img: "/projects/Portfolio4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/vs.svg"],
    link: "https://portfolio-1-three-pink.vercel.app/",
  },
  {
    id: 25,
    title: "Business Nexus Pro",
    des: "Advanced business management solution with analytics and team collaboration features.",
    img: "/projects/BusinessNexus.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/npm.svg", "/bolt.svg"],
    link: "https://business-nexus-bice.vercel.app/",
  },
  {
    id: 26,
    title: "Decoricks",
    des: "Elegant home decor and interior design platform showcasing modern furniture and home accessories.",
    img: "/projects/Decoricks.png",
    iconLists: ["/shop.svg", "/anal.svg"],
    link: "https://decoricks.com/",
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
