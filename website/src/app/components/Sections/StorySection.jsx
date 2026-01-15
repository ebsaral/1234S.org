"use client";

import {
  Flower2 
} from 'lucide-react';


import ContentLayout from '../ContentLayout';

const StorySection = () => {
  const id = "story";
  const sectionKey = "story";

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={Flower2} iconColor="text-purple-700"
      backgroundColor="bg-purple-900"
      accentColor="from-purple-900 to-sky-800"
      titleColor="text-white"
      descriptionColor="text-gray-200"
      className="pb-10"
    >
    </ContentLayout>
  );
};

export default StorySection;