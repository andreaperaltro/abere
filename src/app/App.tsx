import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import CyclingLoader from "./components/CyclingLoader";
import AnimatedHome from "./components/AnimatedHome";
import { useSEO } from "./hooks/useSEO";

const bgColors = [
  "#D3C175", // Yellow
  "#CDC7BF", // Beige
  "#AD927D", // Brown
  "#B56C6A", // Red
  "#BA97BB", // Purple
  "#B2B88B", // Green
];

export default function App() {
  useSEO();
  const [showLoader, setShowLoader] = useState(true);

  // Pick a random color on mount
  const initialBgColor = useMemo(() => {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }, []);

  useEffect(() => {
    // Show loader for 2 seconds then transition to home
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: initialBgColor }}>
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full min-h-screen"
          >
            <CyclingLoader bgColor={initialBgColor} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full min-h-screen"
          >
            <AnimatedHome initialBgColor={initialBgColor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
