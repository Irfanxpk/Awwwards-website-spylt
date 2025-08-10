import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (!isMobile)
        {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-15% top",
                    end: "200% top",
                    scrub: 1.5,
                    pin: true,
                },
            });

            // Circle reveal animation
            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
            });

            // Shake effect with keyframes for a jittery feel
            gsap.to(
                [".video-box video", ".img-grp", ".spin-circle"],
                {
                    keyframes: [
                        { x: 1, y: -5 },
                        { x: -1, y: 4 },
                        { x: 2, y: -6 },
                        { x: -2, y: 5 },
                        { x: 1, y: -4 },
                    ],
                    duration: 0.2,
                    repeat: -1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".vd-pin-section",
                        start: "-15% top",
                        end: "200% top",
                        scrub: true,
                    },
                }
            );
        }
    });

    return (
        <section className="vd-pin-section">
            <div
                style={{
                    clipPath: isMobile
                        ? "circle(100% at 50% 50%)"
                        : "circle(6% at 50% 50%)",
                }}
                className="size-full video-box"
            >
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

                <div className="img-grp abs-center md:scale-100 scale-200">
                    <img src="/images/circle-text.svg" alt="" className="spin-circle" />
                    <div className="play-btn">
                        <img
                            src="/images/play.svg"
                            alt=""
                            className="size-[3vw] ml-[.5vw]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPinSection;
