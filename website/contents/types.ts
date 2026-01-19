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
