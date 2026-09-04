import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { SelectedWork } from '@/components/SelectedWork';
import { IdentityDevelopment } from '@/components/IdentityDevelopment';
import { TypographyLab } from '@/components/TypographyLab';
import { ColorStudies } from '@/components/ColorStudies';
import { DesignProcess } from '@/components/DesignProcess';
import { Services } from '@/components/Services';
import { ClientsTestimonials } from '@/components/ClientsTestimonials';
import { About } from '@/components/About';
import { ExperimentalSection } from '@/components/ExperimentalSection';
import { TypographicBreak } from '@/components/TypographicBreak';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <SelectedWork />
        <IdentityDevelopment />
        <TypographyLab />
        <ColorStudies />
        <DesignProcess />
        <Services />
        <ClientsTestimonials />
        <About />
        <ExperimentalSection />
        <TypographicBreak />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
