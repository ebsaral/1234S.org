export interface HomePageContent {
  title: string;
  intro: string;
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
