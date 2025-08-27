"use client";

import { useState, useEffect } from "react";
import { confetti } from "@tsparticles/confetti";
import { motion } from "framer-motion";

export default function Home() {
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8B1E3F", "#fafafa", "#71717a"],
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8B1E3F", "#fafafa", "#71717a"],
      });
    }, 250);
  }, []);

  const handleClick = () => {
    setShowIndex((prev) => prev + 1);
  };

  const AnimatedPhoto = ({ src, alt }: { src: string; alt: string }) => (
    <motion.div
      className="mt-4 w-full flex justify-center"
      initial={{ opacity: 0, x: 150, rotate: 15, scale: 0.6 }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: [15, -10, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        opacity: { duration: 0.4 },
        x: { type: "spring", stiffness: 100, damping: 8, delay: 0.4 },
        rotate: { duration: 1, ease: "easeOut" },
        scale: {
          delay: 1.2,
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        width={200}
        className="rounded-md shadow-md border border-[#8B1E3F] mx-auto"
      />
    </motion.div>
  );

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-[#fafafa] text-[#3f3f46] cursor-pointer"
      onClick={handleClick}
      style={{ fontFamily: `'Playfair Display', serif` }}
    >
      {showIndex >= 0 && (
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#8B1E3F] mb-6 text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl">To My Forever One and Only </p>
          👑
          <br />
          🎂 <strong>Garfield Mao</strong> 🎂
          <br />
          <br />
          <div className="mt-4">
            <AnimatedPhoto src="/cat.JPG" alt="Garfield Mao" />
          </div>
        </motion.h1>
      )}

      {showIndex >= 1 && (
        <>
          <br />
          <motion.p
            className="text-lg sm:text-xl italic text-[#52525b] mb-6 text-center leading-relaxed max-w-[35ch]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            時間真的好快，不知不覺我們居然已經認識十個年頭啦 😯
            <br />
            恭喜你提前進入新的一歲啦！
          </motion.p>
        </>
      )}

      {showIndex >= 2 && (
        <>
          <motion.p
            className="text-sm sm:text-base text-[#71717a] text-center leading-loose max-w-[32ch]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <br />
            <p>好慶幸我們一路從崇明島 👇</p>
            <br />
            <div className="mt-4">
              <AnimatedPhoto src="/2019.png" alt="崇明島" />
            </div>
            <br />
            <p>到了歐洲大陸👇</p>
            <br />
            <div className="mt-4">
              <AnimatedPhoto src="/2023.png" alt="歐洲大陸" />
            </div>
            <br />
            <span className="text-grey-400">
              新的一歲，也繼續和菲菲一起，創造更多的回憶吧！✈️
            </span>
          </motion.p>
        </>
      )}
      <br />
      {showIndex < 2 && (
        <p className="mt-10 text-sm text-[#a3a3a3] italic">(點我！)</p>
      )}
    </div>
  );
}
