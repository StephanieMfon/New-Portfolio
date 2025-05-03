import { styles } from '../../constants/styles';
import { ComputersCanvas } from '../canvas';
import { config } from '../../constants/config';

const Hero = () => {
  return (
    <>
      {/* <section className={`relative mx-auto h-[100vh] w-full`}> */}
      <section className="relative mx-auto h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        {/* Blurred background layer */}
        <div className="absolute inset-0 bg-hero-pattern blur-lg scale-105"></div>

        <div
          className={`absolute inset-0 top-[120px] md:top-[200px] lg:top-[250px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
        >
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#804dee]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#6a64c9]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]} <br className="hidden sm:block" />
              {config.hero.p[1]}
            </p>
          </div>
        </div>
      </section>

      {/* Second section (interfaces) - Now outside the hero section */}
      <section className="mt-[-100px] text-white pb-20 px-6 md:px-12 lg:px-24 bg-[#02010f]">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative scribble element */}
          <div className="absolute top-0 left-0 w-2/3 opacity-80"></div>

          {/* Content container */}
          <div className="flex flex-col md:flex-row justify-between items-start pt-16 gap-16">
            {/* Left column */}
            <div className="md:w-1/2 lg:w-5/12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                I would love to develop intelligent interfaces
                <span className="block mt-2">for you</span>
              </h1>
            </div>

            {/* Right column */}
            <div className="md:w-1/2 lg:w-5/12 text-lg font-light opacity-90">
              <p>
                I design digital solutions with high added value, combining human and technological
                intelligence. We collaborate with{' '}
                <em className="not-italic opacity-75">ambitious leaders</em>, transforming
                technological complexity into exponential growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Video slider section - Also outside the hero section */}
      <section>{/* <PortfolioVideoSlider /> */}</section>
    </>
  );
};

export default Hero;
