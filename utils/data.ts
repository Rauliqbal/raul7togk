import { Experience, Project, Service, Skill, SocialMedia } from "./interfaces";

export const PROJECTS: Project[] = [
   {
      id: 1,
      liveurl: "https://azurakit.vercel.app",
      githuburl: "#",
      title: "Azurakit",
      category: "Marketplace",
      image: "https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["React JS", " Next JS ", " Tailwind CSS "],
   },
   {
      id: 2,
      liveurl: "https://movieraa.vercel.app",
      githuburl: "#",
      title: "Movieeraa",
      category: "Web Development",
      image: "https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/movieraa-preview.png",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      techStack: ["Vue JS", " Tailwind ", " Rest API "],
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
      company_name: "HI Studio",
      summary:
         "Bringing creativity, technical expertise, and a passion for design to every project.",
      startDate: "2022",
      endDate: "2023",
      jobTitle: "Web Designer",
      bulletPoints: [
         "Developed scalable backend services using Python and Django framework.",
         "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
         "\nDesigned and optimized database schemas for performance and scalability.",
         "\nImplemented real-time messaging features using WebSockets and Redis.",
         "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
      ],
   },
   {
      company_name: "Freelance",
      summary:
         "Building websites with full functionality and interaction in mind with a responsive look.",
      startDate: "2023",
      endDate: "PRESENT",
      jobTitle: "Front-End Developer",
      bulletPoints: [
         "Developed scalable backend services using Python and Django framework.",
         "\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.",
         "\nDesigned and optimized database schemas for performance and scalability.",
         "\nImplemented real-time messaging features using WebSockets and Redis.",
         "\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.",
      ],
   },
];
