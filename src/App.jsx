
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    if (!loading)
    {
      // Enable scrolling again after preloader
      document.body.style.overflow = "auto";

      // Create smoother only when content is mounted
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });

      // Refresh ScrollTrigger to recalc positions
      ScrollTrigger.refresh();
    } else
    {
      // Prevent scroll while loading
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <main>
          <NavBar />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <HeroSection />
              <MessageSection />
              <FlavorSection />
              <NutritionSection />
              <BenefitSection />
              <TestimonialSection />
              <FooterSection />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default App;































// import Preloader from "./components/Preloader";
// import NavBar from "./components/NavBar";
// import HeroSection from "./sections/HeroSection";
// import { ScrollSmoother, ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import MessageSection from "./sections/MessageSection";
// import FlavorSection from "./sections/FlavorSection";
// import { useGSAP } from "@gsap/react";
// import NutritionSection from "./sections/NutritionSection";
// import BenefitSection from "./sections/BenefitSection";
// import TestimonialSection from "./sections/TestimonialSection";
// import FooterSection from "./sections/FooterSection";
// import { useState } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   useGSAP(() => {
//     ScrollSmoother.create({
//       smooth: 3,
//       effects: true,
//     });
//   });

//   return (<>
//     {loading && <Preloader onFinish={() => setLoading(false)} />}
//     {!loading && (
//       <>
//         <main>
//           <NavBar />
//           <div id="smooth-wrapper">
//             <div id="smooth-content">
//               <HeroSection />
//               <MessageSection />
//               <FlavorSection />
//               <NutritionSection />

//               <div>
//                 <BenefitSection />
//                 <TestimonialSection />
//               </div>

//               <FooterSection />
//             </div>
//           </div>
//         </main>
//       </>)}
//   </>
//   );
// };

// export default App;