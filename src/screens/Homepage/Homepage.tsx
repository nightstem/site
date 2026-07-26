import Footer from '@/components/layout/Footer';
import { Hero, Information, Projects } from '@/screens/Homepage/sections';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Information />

      {/* Projects fills whatever the footer doesn't take of the last viewport */}
      <div className="flex min-h-dvh flex-col">
        <Projects className="flex-1" />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
