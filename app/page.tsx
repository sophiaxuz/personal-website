"use client";

import { useState, useEffect } from "react";
import { confetti } from "@tsparticles/confetti";
import { motion } from "framer-motion";

export default function Home() {
  const [showIndex, setShowIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isReplaying, setIsReplaying] = useState(false);

  // 🎉 Confetti effect on mount or replay
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
  }, [isReplaying]);

  const handleClick = () => {
    if (!isReplaying) {
      setShowIndex((prev) => prev + 1);
    }
  };

  const handleReplay = () => {
    setIsReplaying(true);
    setHasAnimated({});
    setShowIndex(-1); // 👈 小技巧：先設 -1 避免同一幀重新渲染空白
    setTimeout(() => {
      setShowIndex(0);
      setIsReplaying(false);
    }, 100); // 設定為 100ms 就足夠了
  };

  const AnimatedPhoto = ({ src, alt }: { src: string; alt: string }) => {
    const alreadyAnimated = hasAnimated[src];

    useEffect(() => {
      if (!alreadyAnimated) {
        setHasAnimated((prev) => ({ ...prev, [src]: true }));
      }
    }, [alreadyAnimated, src]);

    return (
      <motion.div
        className="mt-4 w-full flex justify-center"
        initial={
          alreadyAnimated
            ? false
            : { opacity: 0, x: 120, rotate: 10, scale: 0.8 }
        }
        animate={
          alreadyAnimated ? {} : { opacity: 1, x: 0, rotate: 0, scale: 1 }
        }
        transition={
          alreadyAnimated
            ? {}
            : {
                duration: 0.8,
                ease: [0.175, 0.885, 0.32, 1.275],
              }
        }
      >
        <motion.img
          src={src}
          alt={alt}
          width={400}
          className="rounded-md shadow-md border border-[#8B1E3F] mx-auto"
          animate={{
            scale: [1, 1.015, 0.985, 1],
            rotate: [0, 0.3, -0.3, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-[#fafafa] text-[#3f3f46] cursor-pointer"
      onClick={handleClick}
      style={{ fontFamily: `'Playfair Display', serif` }}
    >
      {showIndex === 0 && (
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#8B1E3F] mb-6 text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl" style={{ fontSize: "25px" }}>
            To My Forever One and Only
          </p>
          <p style={{ fontSize: "30px" }}>👑</p>
          <strong style={{ fontSize: "30px" }}>🎂 Garfield Mao 🎂</strong>
          <br />
          <br />
          <AnimatedPhoto src="/cat.JPG" alt="Garfield Mao" />
        </motion.h1>
      )}

      {showIndex === 1 && (
        <motion.div
          style={{ fontSize: "16px" }}
          className="text-lg sm:text-xl italic text-[#52525b] mb-6 text-center leading-relaxed max-w-[35ch]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          時間真的好快 😯
          <br />
          <br />
          不知不覺我們居然已經認識十個年頭啦
          <br />
          <br />
          <AnimatedPhoto src="/2016.png" alt="Garfield Mao" />
          <br />
          恭喜wuli毛毛醬提前進入新的一歲啦！
        </motion.div>
      )}

      {showIndex === 2 && (
        <motion.div
          className="text-sm sm:text-base text-[#71717a] text-center leading-loose max-w-[32ch]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>誰能想到我們一路從崇明島 👇</p>
          <br />
          <AnimatedPhoto src="/2019.png" alt="崇明島" />
        </motion.div>
      )}

      {showIndex === 3 && (
        <motion.div
          className="text-sm sm:text-base text-[#71717a] text-center leading-loose max-w-[32ch]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>到了歐洲大陸 👇</p>
          <br />
          <AnimatedPhoto src="/2023.png" alt="歐洲大陸" />
          <br />
          <span className="text-grey-400">
            新的一歲，請也繼續和菲菲一起，創造更多的回憶吧！✈️
          </span>
        </motion.div>
      )}

      {showIndex === 4 && (
        <motion.div
          key="ending"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-5xl mb-6"
          >
            ❤️
          </motion.p>

          <motion.p
            className="text-2xl sm:text-3xl text-[#8B1E3F] font-semibold leading-relaxed"
            style={{ fontSize: "18px" }}
          >
            愛你的菲菲深情致上！
          </motion.p>

          <button
            onClick={handleReplay}
            className="mt-8 px-4 py-2 bg-[#8B1E3F] text-white text-sm rounded-md shadow-md hover:bg-[#a42a4f] transition-colors"
            style={{ fontSize: "12px" }}
          >
            <br />
            🔁 好傢伙，把我感動哭了，讓我再看一遍
          </button>
        </motion.div>
      )}

      {showIndex < 4 && !isReplaying && (
        <p className="mt-10 text-sm text-[#a3a3a3] italic">
          {" "}
          <br />
          (點我點我！)
        </p>
      )}
    </div>
  );
}
