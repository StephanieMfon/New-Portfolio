import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { useEffect } from 'react';
import { config } from './constants/config';
import PortfolioVideoSlider from './components/canvas/SwiperSlides';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  // useEffect(() => {
  //   const cursorDot = document.getElementById('cursor-dot');

  //   const moveCursor = e => {
  //     setTimeout(() => {
  //       cursorDot.style.left = `${e.clientX}px`;
  //       cursorDot.style.top = `${e.clientY}px`;
  //     }, 50);
  //   };

  //   window.addEventListener('mousemove', moveCursor);

  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor);
  //   };
  // }, []);
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');

    const moveCursor = e => {
      // Don't use setTimeout here as the transition property will handle the delay
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>

        <PortfolioVideoSlider />

        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
