import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import CyclingLoader from "./components/CyclingLoader";
import AnimatedHome from "./components/AnimatedHome";
import PrivacyPage from "./components/PrivacyPage";
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
  const isPrivacyPage =
    window.location.pathname === "/privacy" || window.location.hash === "#privacy";
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

  if (isPrivacyPage) {
    return <PrivacyPage />;
  }

  return (
    <div className="relative w-full min-h-[100dvh]" style={{ backgroundColor: initialBgColor }}>
      <AnimatedHome initialBgColor={initialBgColor} />
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="loader"
            data-loader-shell="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-10 h-[100dvh] min-h-[100svh] w-full"
            style={{ backgroundColor: initialBgColor }}
          >
            <CyclingLoader bgColor={initialBgColor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
