"use client";

import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "./libs/utils";
import Image from "next/image";

// import * as motion from "motion/react-client"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function ThemeToggle() {
  return (
    <AnimatePresence>
      <motion.div
        // className="box"
        /** Initia */
        initial={{ scale: 2, opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        whileHover={{
          scale: [null, 1.3, 1.2],
          rotate: [0, 2, -2, 0],
        }}
        // transition={{ duration: 0.3 }}
        variants={draw}
      >
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={380}
          height={50}
          priority
        />
      </motion.div>
    </AnimatePresence>
  );
}
