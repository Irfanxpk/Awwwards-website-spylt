import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      duration: 1,
    })
      .to(
        ".hero-text-scroll",
        {
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
          duration: 1,
        },
        "-=.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          ease: "power2.inOut",
          stagger: { amount: 0.2 },
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container relative w-full h-[100vh] overflow-hidden">
        {/* Show video for tablet & desktop */}
        {!isMobile && (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover"
          />
        )}

        {/* Show image for mobile */}
        {isMobile && (
          <img
            src="/images/hero-img.png"
            alt="Hero background"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
          />
        )}

        <div className="hero-content opacity-0 relative z-10 px-4 md:px-8">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1> Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button hover:cursor-pointer">
            <p>Chug a Spy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
