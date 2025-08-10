import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onFinish }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Add all asset URLs you know you need
        const assetUrls = [
            "/images/hero-bg.png",
            "/images/flavor1.png",
            "/images/hero-bg.png",
            "/images/flavor2.png",
            "/images/flavor3.png",
            "images/",
            "/videos/hero-bg.mp4",
            // add ALL your site images/videos here
        ];

        let loadedCount = 0;

        const loadAsset = (url) => {
            return new Promise((resolve) => {
                let el;
                if (url.match(/\.(mp4|webm)$/))
                {
                    el = document.createElement("video");
                    el.src = url;
                    el.preload = "auto";
                    el.onloadeddata = resolve;
                    el.onerror = resolve;
                } else
                {
                    el = new Image();
                    el.src = url;
                    el.onload = resolve;
                    el.onerror = resolve;
                }
            });
        };

        Promise.all(
            assetUrls.map((url) =>
                loadAsset(url).then(() => {
                    loadedCount++;
                    const targetProgress = Math.round((loadedCount / assetUrls.length) * 100);
                    gsap.to({}, {
                        duration: 0.3,
                        onUpdate: () => {
                            setProgress((prev) => (prev < targetProgress ? prev + 1 : targetProgress));
                        },
                        onComplete: () => {
                            if (targetProgress === 100)
                            {
                                setTimeout(onFinish, 500);
                            }
                        },
                    });
                })
            )
        );
    }, [onFinish]);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-[9999]">
            <div className="text-4xl font-bold">{progress}%</div>
            <div className="mt-4 w-64 h-1 bg-gray-700 relative overflow-hidden rounded">
                <div
                    className="absolute top-0 left-0 h-full bg-white transition-all"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}
