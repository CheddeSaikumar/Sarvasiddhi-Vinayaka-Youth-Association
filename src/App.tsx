import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Donation from '@/components/Donation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Gallery />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
