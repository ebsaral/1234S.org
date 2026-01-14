"use client";

import { useIntlayer } from 'next-intlayer';

import {
  FileHeart
} from 'lucide-react';

import ContentLayout from './ContentLayout';
import MembershipForm from './Custom/MembershipForm';

const MembershipSection = () => {
  const id = "membership";
  const sectionKey = "membership";
  const content = useIntlayer(`${sectionKey}-section`);

  return (
    <ContentLayout 
      sectionKey={sectionKey} id={id} icon={FileHeart} iconColor="text-blue-600"
      backgroundColor="bg-blue-500"
      accentColor="from-blue-500 to-blue-200"
      className="pb-10"
      descriptionClassName={"text-center"}
      descriptionColor={"text-gray-950"}
    >
      <MembershipForm />
    </ContentLayout>
  );
};

export default MembershipSection;