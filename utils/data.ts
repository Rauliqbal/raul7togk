import { Experience, Project, Service, Skill, SocialMedia } from "./interfaces";

export const PROJECTS: Project[] = [
   {
      id: 1,
      liveurl: "https://azurakit.vercel.app",
      githuburl: "#",
      title: "Azurakit",
      category: "Website",
      image: "azurakit.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      id: 2,
      liveurl: "https://dribbble.com/shots/19624105-FurniLux-Furniture-Landing-Page",
      githuburl: "#",
      title: "Furnilux - Furniture E-commerce",
      category: "ui design",
      image: "furnilux.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      id: 3,
      liveurl: "https://iratoon.vercel.app",
      githuburl: "#",
      title: "Iratoon - Streaming Anime",
      category: "Website",
      image: "iratoon-web.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      id: 4,
      liveurl: "https://ngajee.web.id",
      githuburl: "#",
      title: "Ngajee - Al Qur'an Indonesia",
      category: "Mobile App",
      image: "ngajee-app.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      id: 5,
      liveurl: "https://azurakit-weserve.vercel.app/",
      githuburl: "#",
      title: " WeServe - Hosting Landing Page",
      category: "Website",
      image: "weserve.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      id: 6,
      liveurl: "https://nightcoder-website.vercel.app",
      githuburl: "#",
      title: "NightCoder Community",
      category: "Website",
      image: "nightcoder.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
];

export const SERVICES: Service[] = [
   {
      id: 1,
      name: "Web Development",
      desc: "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
      image: "web-development.webp",
   },
   {
      id: 2,
      name: "App Development",
      desc: "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
      image: "app-development.webp",
   },
   {
      id: 3,
      name: "UI/UX Designer",
      desc: "Design direction for business. Get your business on the next level. We help to create great experiences.",
      image: "uiux-designer.webp",
   },
];

export const SKILLS: Skill[] = [
   {
      name: "Javascript",
   },
   {
      name: "Tailwind CSS",
   },
   {
      name: "React JS",
   },
   {
      name: "Vue JS",
   },
   {
      name: "Next JS",
   },
   {
      name: "Nuxt JS",
   },
   {
      name: "Tailwind CSS",
   },
   {
      name: "NODE JS",
   },
   {
      name: "Express js",
   },
];

export const SOCIAL_MEDIA: SocialMedia[] = [
   {
      platform: "Instagram",
      url: "https://github.com/Rauliqbal",
      image: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp",
      enabled: true,
   },
   {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-raul-iqbal/",
      image: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
      enabled: true,
   },
   {
      enabled: true,
      platform: "Dribble",
      url: "https://dribbble.com/Rauliqbal",
      image: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp",
   },
   {
      enabled: true,
      platform: "Youtube",
      url: "https://www.youtube.com/channel/UCklGTRJJjc00lK-qF3L_CRQ",
      image: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
   },
];

export const EXPERIENCE: Experience[] = [
   
   {
      company_name: "Freelance",
      summary: "Building websites with full functionality and interaction in mind with a responsive look.",
      startDate: 2022,
      endDate: "2024",
      jobTitle: "Web Developer",
      bulletPoints: [
         "Developed scalable backend services using Python and Django framework.",
         "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
         "\nDesigned and optimized database schemas for performance and scalability.",
         "\nImplemented real-time messaging features using WebSockets and Redis.",
         "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
      ],
      frontmatter: undefined
   },
   {
      company_name: "Elemes Group",
      summary: "Building the appearance of the website using the slicing design method with a responsive appearance and optimizing the website from the client side",
      startDate: 2025,
      endDate: "PRESENT",
      jobTitle: "Front-End Developer",
      bulletPoints: [
         "Developed scalable backend services using Python and Django framework.",
         "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
         "\nDesigned and optimized database schemas for performance and scalability.",
         "\nImplemented real-time messaging features using WebSockets and Redis.",
         "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
      ],
      frontmatter: undefined
   },

   
];
