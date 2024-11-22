export interface UserObject {
   success: boolean;
   user: User;
}

export interface User {
   about: About;
   _id: string;
   username: string;
   email: string;
   role: string;
   timeline: Timeline[];
   skills: Skill[];
   youtube: any[];

   social_handles: SocialMedia[];
   services: Service[];
   testimonials: Testimonial[];
   createdAt: string;
   updatedAt: string;
   refreshToken: string;
}

export interface About {
   name: string;
   title: string;
   subTitle: string;
   description: string;
   quote: string;
   exp_year: string;
   address: string;
   some_total: string;
   phoneNumber: string;
   avatar: Avatar;
   alternateAvatars: any[];
}

export interface Avatar {
   public_id: string;
   url: string;
   _id: string;
}

export interface Skill {
   enabled: boolean;
   name: string;
   sequence: number;
   percentage: number;
   image: Avatar;
   _id: string;
}

export interface Project {
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
   name: string;
   charge: string;
   desc: string;
   enabled: boolean;
   _id: string;
   image: Image;
}

export interface Testimonial {
   image: Image;
   name: string;
   review: string;
   position: string;
   enabled: boolean;
   _id: string;
}

export interface Timeline {
   company_name: string;
   summary: string;
   sequence: number;
   startDate: string;
   endDate: string;
   jobTitle: string;
   jobLocation: string;
   bulletPoints: string[];
   forEducation: boolean;
   enabled: boolean;
   _id: string;
}
