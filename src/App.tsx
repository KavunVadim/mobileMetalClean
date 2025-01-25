import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
