export interface Skill {
   name: string;
}

export interface Project {
   id: number;
   liveurl: string;
   githuburl: string;
   title: string;
   category: string;
   image: string;
   description: string;
   techStack: string[];
}

export interface SocialMedia {
   platform: string;
   url: string;
   image: string;
   enabled: boolean;
}

export interface Service {
   id: number;
   name: string;
   desc: string;
   image: string;
}

// export interface Testimonial {
//    image: Image;
//    name: string;
//    review: string;
//    position: string;
//    enabled: boolean;
//    _id: string;
// }

export interface Experience {
   frontmatter: any;
   company_name: string;
   summary: string;
   startDate: number;
   endDate: string;
   jobTitle: string;
   bulletPoints: string[];
}
