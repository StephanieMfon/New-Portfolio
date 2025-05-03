// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';
// import itechhire from '../../assets/videos/itechhire.mp4';
// import oxymon from '../../assets/videos/Oxymon.mp4';
// import onedoc1 from '../../assets/videos/onedoc1.mp4';
// import onedoc2 from '../../assets/videos/actual-onedoc-ai.mp4';
// import onedoc3 from '../../assets/videos/onedoc3.mp4';
// import kemdiattire from '../../assets/videos/kemdiattire.mp4';
// const PortfolioVideoSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(null);
//   const swiperRef = useRef(null);

//   // More portfolio projects
//   const projects = [
//     {
//       id: 1,
//       videoUrl:
//         'https://res.cloudinary.com/daqqc2etr/video/upload/v1746311139/itechhire_hvkfnu.mp4',
//       title: 'HR/Recruitment Platform',
//       description: 'Streamlining hiring/project management processes',
//     },
//     {
//       id: 2,
//       videoUrl: 'https://res.cloudinary.com/daqqc2etr/video/upload/v1746311074/Oxymon_xvpbwm.mp4',
//       title: 'Financial Management System',
//       description: 'Simplifying financial management for businesses and individuals',
//     },
//     {
//       id: 3,
//       videoUrl:
//         'https://res.cloudinary.com/daqqc2etr/video/upload/v1746311035/actual-onedoc-ai1_u6dpqm.mp4',
//       title: 'Slide deck creation',
//       description: 'Creating stunning presentations with ready to use templates',
//     },
//     {
//       id: 6,
//       videoUrl:
//         'https://res.cloudinary.com/daqqc2etr/video/upload/v1746311131/compressed1_pab0om.mp4',
//       title: 'AI Measurement Assistant',
//       description: 'Revolutionizing fashion with AI-driven measurements',
//     },
//     {
//       id: 4,
//       videoUrl: 'https://res.cloudinary.com/daqqc2etr/video/upload/v1746311113/onedoc1_ig5trf.mp4',
//       title: 'Slide deck creation',
//       description: 'Creating stunning presentations with ready to use templates',
//     },
//     {
//       id: 5,
//       videoUrl: "https://res.cloudinary.com/daqqc2etr/video/upload/v1746311073/onedoc3_ozha0y.mp4",
//       title: 'Slide deck creation',
//       description: 'Creating stunning presentations with ready to use templates',
//     },
//   ];

//   const handleMouseEnter = id => {
//     setActiveSlide(id);
//     if (swiperRef.current && swiperRef.current.autoplay) {
//       swiperRef.current.autoplay.stop();
//     }
//   };

//   const handleMouseLeave = () => {
//     setActiveSlide(null);
//     if (swiperRef.current && swiperRef.current.autoplay) {
//       swiperRef.current.autoplay.start();
//     }
//   };

//   return (
//     <div
//       style={{
//         // width: '80%',
//         backgroundColor: '#030416', // Very dark blue/black
//         padding: '80px 0',
//         overflow: 'hidden',
//         margin: '0 auto', // Center the slider
//       }}
//     >
//       <Swiper
//         onSwiper={swiper => {
//           swiperRef.current = swiper;
//         }}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           768: {
//             // Medium screens
//             slidesPerView: 2,
//           },
//           1024: {
//             // Large screens
//             slidesPerView: 3,
//           },
//         }}
//         loop={true}
//         speed={6000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         freeMode={{
//           enabled: true,
//           momentum: false,
//         }}
//         // navigation={true}
//         modules={[Autoplay, Navigation, FreeMode]}
//         style={{
//           overflow: 'visible',
//         }}
//       >
//         {projects.map(project => (
//           <SwiperSlide key={project.id}>
//             <div
//               style={{
//                 position: 'relative',
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 cursor: 'pointer',
//                 transition: 'transform 0.3s ease',
//                 transform: activeSlide === project.id ? 'scale(1.03)' : 'scale(1)',
//                 boxShadow: activeSlide === project.id ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
//               }}
//               onMouseEnter={() => handleMouseEnter(project.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {/* Video with NO initial overlay */}
//               <video
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   // No filter by default, videos are clear
//                 }}
//               >
//                 <source src={project.videoUrl} type="video/mp4" />
//               </video>

//               {/* Overlay that ONLY appears on hover */}
//               <div
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   backgroundColor:
//                     activeSlide === project.id ? 'rgba(68, 78, 255, 0.8)' : 'rgba(0, 0, 0, 0)', // Blue/purple overlay ONLY on hover
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   transition: 'background-color 0.3s ease',
//                   padding: '30px',
//                   textAlign: 'center',
//                 }}
//               >
//                 {/* Text content only visible on hover */}
//                 <h3
//                   style={{
//                     fontSize: '1.8rem',
//                     marginBottom: '10px',
//                     fontWeight: '500',
//                     color: 'white',
//                     opacity: activeSlide === project.id ? 1 : 0,
//                     transform: activeSlide === project.id ? 'translateY(0)' : 'translateY(20px)',
//                     transition: 'opacity 0.3s ease, transform 0.3s ease',
//                   }}
//                 >
//                   {project.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: '1rem',
//                     color: 'white',
//                     opacity: activeSlide === project.id ? 1 : 0,
//                     transform: activeSlide === project.id ? 'translateY(0)' : 'translateY(20px)',
//                     transition: 'opacity 0.3s ease, transform 0.3s ease',
//                     transitionDelay: '0.1s',
//                     maxWidth: '80%',
//                   }}
//                 >
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default PortfolioVideoSlider;
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const PortfolioVideoSlider = () => {
  const [activeSlide, setActiveSlide] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState([]);
  const swiperRef = useRef(null);
  const videoRefs = useRef({});

  // Optimized project data with enhanced Cloudinary URLs
  const projects = [
    {
      id: 1,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311139/itechhire_hvkfnu.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311139/itechhire_hvkfnu.jpg',
      title: 'HR/Recruitment Platform',
      description: 'Streamlining hiring/project management processes',
    },
    {
      id: 2,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311074/Oxymon_xvpbwm.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311074/Oxymon_xvpbwm.jpg',
      title: 'Financial Management System',
      description: 'Simplifying financial management for businesses and individuals',
    },
    {
      id: 3,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311035/actual-onedoc-ai1_u6dpqm.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311035/actual-onedoc-ai1_u6dpqm.jpg',
      title: 'Slide deck creation',
      description: 'Creating stunning presentations with ready to use templates',
    },
    {
      id: 6,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311131/compressed1_pab0om.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311131/compressed1_pab0om.jpg',
      title: 'AI Measurement Assistant',
      description: 'Revolutionizing fashion with AI-driven measurements',
    },
    {
      id: 4,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311113/onedoc1_ig5trf.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311113/onedoc1_ig5trf.jpg',
      title: 'Slide deck creation',
      description: 'Creating stunning presentations with ready to use templates',
    },
    {
      id: 5,
      videoUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_auto,w_500/v1746311073/onedoc3_ozha0y.mp4',
      posterUrl:
        'https://res.cloudinary.com/daqqc2etr/video/upload/q_auto,f_jpg,w_500/v1746311073/onedoc3_ozha0y.jpg',
      title: 'Slide deck creation',
      description: 'Creating stunning presentations with ready to use templates',
    },
  ];

  // Simplified handleSlideChange that safely checks for slides
  const handleSlideChange = () => {
    if (!swiperRef.current || !swiperRef.current.slides) {
      return; // Exit if swiper or slides aren't available yet
    }

    // Get first few visible slides based on slidesPerView
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const activeIndex = swiperRef.current.activeIndex;

    // Determine which project IDs should be visible
    const activeIds = [];
    for (let i = 0; i < visibleCount; i++) {
      // Account for loop mode in Swiper
      const slideIndex = (activeIndex + i) % projects.length;
      activeIds.push(projects[slideIndex].id);
    }

    setVisibleSlides(activeIds);
  };

  // Handle video playback based on visibility
  useEffect(() => {
    // Pause all videos first
    Object.values(videoRefs.current).forEach(videoEl => {
      if (videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    });

    // Play only visible videos
    visibleSlides.forEach(id => {
      const videoEl = videoRefs.current[id];
      if (videoEl && videoEl.paused) {
        // Use play() with catch to handle autoplay restrictions
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented - this is fine, user can interact to play
          });
        }
      }
    });
  }, [visibleSlides]);

  const handleMouseEnter = id => {
    setActiveSlide(id);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setActiveSlide(null);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#030416',
        padding: '80px 0',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
          // Initialize visible slides after swiper is mounted
          setTimeout(handleSlideChange, 300);
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        modules={[Autoplay, Navigation, FreeMode]}
        style={{
          overflow: 'visible',
        }}
        onSlideChange={handleSlideChange}
        onResize={handleSlideChange}
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                transform: activeSlide === project.id ? 'scale(1.03)' : 'scale(1)',
                boxShadow: activeSlide === project.id ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
              }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Optimized video with lazy loading and poster */}
              <video
                ref={el => (videoRefs.current[project.id] = el)}
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.posterUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>

              {/* Overlay that ONLY appears on hover */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeSlide === project.id ? 'rgba(68, 78, 255, 0.8)' : 'rgba(0, 0, 0, 0)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease',
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                {/* Text content only visible on hover */}
                <h3
                  style={{
                    fontSize: '1.8rem',
                    marginBottom: '10px',
                    fontWeight: '500',
                    color: 'white',
                    opacity: activeSlide === project.id ? 1 : 0,
                    transform: activeSlide === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    opacity: activeSlide === project.id ? 1 : 0,
                    transform: activeSlide === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    transitionDelay: '0.1s',
                    maxWidth: '80%',
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioVideoSlider;
