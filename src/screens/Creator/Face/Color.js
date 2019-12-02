import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Color01 = () => {
  return (
    <motion.g
      id="Color01"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <defs>
        <linearGradient
          id="linear-gradient-2"
          x1="20"
          y1="39.52"
          x2="20"
          y2="0.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffce10" stopOpacity="0" />
          <stop offset="0.12" stopColor="#ffa618" stopOpacity="0.5" />
          <stop offset="0.54" stopColor="#ff6525" stopOpacity="0.73" />
          <stop offset="1" stopColor="#ff3e2d" />
        </linearGradient>
      </defs>
      <circle
        id="angry"
        cx="20"
        cy="20"
        r="20"
        style={{ fill: "url(#linear-gradient-2)" }}
      />
    </motion.g>
  );
};

const Color02 = () => {
  return (
    <motion.g
      id="Color02"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <defs>
        <linearGradient
          id="linear-gradient-3"
          x1="20"
          y1="39.52"
          x2="20"
          y2="0.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffce10" stopOpacity="0" />
          <stop offset="0.77" stopColor="#66b4f8" stopOpacity="0.97" />
          <stop offset="1" stopColor="#61b3ff" />
        </linearGradient>
      </defs>

      <circle
        id="blue"
        cx="20"
        cy="20"
        r="20"
        style={{ fill: "url(#linear-gradient-3)" }}
      />
    </motion.g>
  );
};

export default ({ selected }) => {
  return (
    <g id="color">
      <AnimatePresence>
        {selected === "Color01" && <Color01 key={selected} />}
        {selected === "Color02" && <Color02 key={selected} />}
      </AnimatePresence>
    </g>
  );
};

export const colorList = [Color01, Color02];
