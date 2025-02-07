import { Suspense, lazy } from 'react';
import LaserCleaningWidget from './components/LaserCleaningWidget';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Reviews = lazy(() => import('./components/Reviews'));

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center h-screen"
      aria-live="polite"
    >
      <div className="animate-pulse rounded-full bg-gray-700">
        <img
          src="./images/logo.webp"
          alt="Loading-logo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-background text-foreground" role="main">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
        <LaserCleaningWidget />
      </Suspense>
    </div>
  );
}

export default App;
