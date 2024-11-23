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
}

export interface Avatar {
   public_id: string;
   url: string;
   _id: string;
}

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
