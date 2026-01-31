import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RouteSection from '@/components/RouteSection';
import InfoSection from '@/components/InfoSection';
import RegulationsSection from '@/components/RegulationsSection';
import RegistrationSection from '@/components/RegistrationSection';
import ClubSection from '@/components/ClubSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RouteSection />
        <InfoSection />
        <RegulationsSection />
        <RegistrationSection />
        <ClubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
