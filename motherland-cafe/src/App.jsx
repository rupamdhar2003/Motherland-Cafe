import './App.css';
import { motherlandData as cafe } from './data/motherland.js';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import MenuHighlights from './components/MenuHighlights/MenuHighlights.jsx';
import PrimaryCTA from './components/PrimaryCTA/PrimaryCTA.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Location from './components/Location/Location.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar
        brand={cafe.brand}
        links={cafe.nav}
        ctaLabel="Reserve"
        ctaHref="#reserve"
      />
      <main>
        <Hero hero={cafe.hero} brand={cafe.brand} />
        <div className="divider-wave" />
        <About about={cafe.about} />
        <div className="divider-wave" />
        <MenuHighlights menu={cafe.menu} />
        <PrimaryCTA reserve={cafe.reserve} />
        <Reviews reviews={cafe.reviews} />
        <Location location={cafe.location} />
        <Contact contact={cafe.contact} />
      </main>
      <Footer brand={cafe.brand} footer={cafe.footer} />
    </div>
  );
}
