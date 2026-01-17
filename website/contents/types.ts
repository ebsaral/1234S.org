export interface HomePageContent {
  title: string;
  intro: string;
  projects: {
    title: string;
    description: string;
    items: {
      title: string;
      subtitle: string;
    }[];
  };
}
