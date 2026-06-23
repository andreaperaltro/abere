import { useState, useEffect } from "react";
import svgPaths1 from "../../imports/Loader-1/svg-phsl8sibz7";
import svgPaths2 from "../../imports/Loader-2/svg-52dqarz63c";
import svgPaths3 from "../../imports/Loader-3/svg-hogrse09fq";
import svgPaths4 from "../../imports/Loader-4/svg-7rmdg3uhy1";
import svgPaths5 from "../../imports/Loader-5/svg-98cjsu3qgi";
import svgPaths6 from "../../imports/Loader-6/svg-w8kx9hr2fx";

const loaderData = [
  { path: svgPaths1.p8bb7700, viewBox: "0 0 158.999 92.0003" },
  { path: svgPaths2.p1bfca00, viewBox: "0 0 168 85.9987" },
  { path: svgPaths3.p3026c600, viewBox: "0 0 112.999 95.9993" },
  { path: svgPaths4.p15015200, viewBox: "0 0 167.003 58.9999" },
  { path: svgPaths5.p3c0e4b00, viewBox: "0 0 166.002 60.9997" },
  { path: svgPaths6.p3a82ac00, viewBox: "0 0 178.003 72.9982" },
];

export default function CyclingLoader({ bgColor }: { bgColor: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loaderData.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const currentLoader = loaderData[currentIndex];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="w-[200px] h-[100px] relative">
        <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox={currentLoader.viewBox}>
          <path d={currentLoader.path} fill="black" />
        </svg>
      </div>
    </div>
  );
}
