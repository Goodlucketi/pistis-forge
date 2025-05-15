import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ObjectivesSection from './components/Objectives';
import ProjectsSection from './components/Projects';
import EventsSection from './components/Events';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <ProjectsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
