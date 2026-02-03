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
  title: string;
  profession?: string;
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
  description: string;
  members: TeamMember[];
  join: string;
  total: {
    count: number;
    label: string;
  };
  note: string;
}

export interface HomePageContent {
  title: string;
  intro: string;
  logo: {
    title: string;
    href: string;
  };
  readMore: {
    text: string;
    href: string;
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
