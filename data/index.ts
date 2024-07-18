export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently building an enterprise level restaurant POS software with MERN with complete inventory system and sales analytics",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 4,
    title: "Carepulse",
    des: "Healthcare platform that streamlines patient registration, appointment scheduling, and medical records, and learn to implement complex forms",
    img: "/carepulse.png",
    iconLists: ["/next.svg", "/tail.svg", "shop-pay.png", "gpay.png"],
    link: "https://carepulse-rouge.vercel.app/",
  },
  {
    id: 2,
    title: "CaseCobra",
    des: "CaseCobra is a cutting-edge Next.js application that empowers users to personalize their phone cases with any image of their choice. The platform offers a seamless customization experience and integrates Stripe for secure and efficient payment processing, ensuring a smooth and user-friendly ordering process.",
    img: "/casecobra.png",
    iconLists: ["/next.svg", "/tail.svg", "shop-pay.png", "gpay.png"],
    link: "https://casecobra-sigma-hazel.vercel.app/",
  },
  {
    id: 3,
    title: "Food Ordering App",
    des: "Food Ordering App is an innovative Next.js application that enables users to create their own virtual restaurants and order from others' eateries. This platform provides a unique, community-driven food ordering experience, featuring seamless Stripe payment integration for secure and convenient transactions.",
    img: "/mern-food-ordering-app.png",
    iconLists: ["/next.svg", "/tail.svg", "shop-pay.png", "gpay.png"],
    link: "https://mern-food-ordering-app-frontend-trol.onrender.com",
  },
  {
    id: 1,
    title: "Barelyhuman",
    des: "BarelyHuman is a sleek and modern e-commerce platform designed to provide fitness enthusiasts with a seamless shopping experience for high-quality gym outfits. Built with Liquid and hosted on Shopify, this project showcases the integration of robust e-commerce functionalities with an eye-catching, user-friendly interface",
    img: "/barelyhuman.jpg",
    iconLists: ["/liquid.png", "/tail.svg", "shop-pay.png", "gpay.png"],
    link: "https://www.barelyhuman.com/",
  },
];

export const testimonials = [
  {
    quote:
      "I want to give a huge shoutout to Bello Olamilekan for his incredible work on our e-commerce app at BarelyHuman. Using Liquid language and hosting it on Shopify, he has created a platform where users can easily register, manage their accounts, and purchase our gym outfits. The payment integration is seamless, and the user interface and experience are simply adorable. Thanks to Bello, our customers have a smooth and enjoyable shopping experience. Fantastic job, Bello!",
    name: "PRO",
    title: "Director of BarelyHuman Gym (UK)",
  },
  {
    quote:
      "I want to extend my deepest appreciation for Bello Olamilekan's outstanding contribution as an instructor at Etiwa. His expertise in frontend web development has profoundly impacted our students, providing them with the knowledge and skills necessary to excel in the field. Bello's ability to simplify complex concepts and engage students with practical, hands-on learning has made him an invaluable part of our educational team. His dedication and passion for teaching have truly set a high standard at Etiwa. Thank you, Bello, for your exceptional work!",
    name: "Mark Stella",
    title: "Etiwa Tech Managing Director (NGN)",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "stripe.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Created and hosted an e-commerce website on shopify using the liquid language, from initial concept to deployment on shopify.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Team Of Frontend Developers",
    desc: "Took the role of an instructor, teaching over 100+ students concepts and fundamentals of web development.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Olamilekan-12/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/KingKong121211",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/olamilekan-bello-3810b6275/",
  },
];
