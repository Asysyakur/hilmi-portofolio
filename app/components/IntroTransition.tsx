"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroTransition() {
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const imagesToPreload = [
      "/PasFoto.jpg",
      "/confidential-preview.png",
    ];

    let loadedCount = 0;
    const total = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loadedCount += 1;
        if (loadedCount >= total) {
          setReady(true);
        }
      };
      img.src = src;
    });

    const prep = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(prep);
  }, []);

  const handleEnter = () => {
    if (!ready || isLeaving) {
      return;
    }

    setIsLeaving(true);
    window.setTimeout(() => setVisible(false), 720);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLeaving ? 0 : 1,
            scale: isLeaving ? 1.04 : 1,
          }}
          transition={{ duration: isLeaving ? 0.62 : 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-1000 overflow-hidden bg-black"
        >
          <motion.div
            initial={{ y: "-105%" }}
            animate={{ y: isLeaving ? 0 : "-105%" }}
            transition={{ duration: 0.44, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-[48%] bg-[#56b9ea]"
          />

          <motion.div
            initial={{ y: "105%" }}
            animate={{ y: isLeaving ? 0 : "105%" }}
            transition={{ duration: 0.44, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-0 h-[48%] bg-[#ffe600]"
          />

          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: isLeaving ? "120%" : "120%" }}
            transition={{ duration: isLeaving ? 0.34 : 0.8, ease: "easeInOut" }}
            className="absolute top-[34%] h-16 w-[64%] -rotate-6 bg-[#ffe600] opacity-85"
          />

          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: isLeaving ? "-120%" : "-120%" }}
            transition={{
              duration: isLeaving ? 0.34 : 0.8,
              delay: 0.15,
              ease: "easeInOut",
            }}
            className="absolute top-[55%] h-10 w-[84%] rotate-6 bg-[#f7fbff] opacity-10"
          />

          <motion.div
            animate={{
              opacity: isLeaving ? 0 : 1,
              y: isLeaving ? -24 : 0,
              scale: isLeaving ? 0.96 : 1,
            }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="relative flex h-full flex-col items-center justify-center px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="persona-title text-xl uppercase tracking-[0.16em] text-[#f4f2ec]/85 sm:text-2xl"
            >
              Persona Interface Booting
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="hero-glitch persona-title mt-4 text-[clamp(3rem,14vw,8rem)] leading-none"
              data-text="HILMI"
            >
              HILMI
            </motion.h1>

            <motion.button
              type="button"
              onClick={handleEnter}
              disabled={!ready || isLeaving}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.35 }}
              className="slash-card persona-title mt-8 bg-[#ffe600] px-7 py-3 text-2xl uppercase text-[#0b1220] transition enabled:hover:bg-[#fff067] disabled:cursor-not-allowed disabled:opacity-45"
            >
              {isLeaving
                ? "Entering..."
                : ready
                  ? "Start Contract"
                  : "Loading..."}
            </motion.button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
