interface TeamImage {
  src: string;
  size: number;
}

interface TeamLink {
  text: string;
  href: string;
}

interface TeamBirthday {
  year: number;
  month: number;
  day: number;
}

export interface TeamMember {
  name: string;
  description?: string;
  birthday?: TeamBirthday;
  experience?: {
    title: string;
    badge: string;
  };
  badge?: string;
  image: TeamImage;
  links?: TeamLink[];
  join?: boolean;
  spin?: boolean;
}

export interface TeamContent {
  title: string;
  members: TeamMember[];
  contact: string;
  note: string;
}

export interface HomePageContent {
  intro: string;
  logo: {
    title: string;
    src: string;
  };
  jamButton: {
    enable: string;
    disable: string;
  };
  projects: {
    title: string;
    description: string;
    items: {
      title: string;
      subtitle: string;
    }[];
  };
}

export interface TestimonialsContent {
  title: string;
  items: {
    name: string;
    text: string;
  }[];
  prev: string;
  next: string;
}
