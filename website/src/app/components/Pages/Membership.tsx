import MembershipSection from '@/app/components/Sections/MembershipSection';
import { LocalesValues } from 'intlayer';

const Membership = ({ locale }: { locale: LocalesValues }) => {
  return (
    <main>
      <MembershipSection />
    </main>
  );
};

export default Membership;
