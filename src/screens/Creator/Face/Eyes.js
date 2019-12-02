import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Eyes01 = () => {
  return (
    <motion.g
      id="Eyes01"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <ellipse id="eyeball02" cx="12" cy="17" rx="2" ry="3" />
      <ellipse id="eyeball01" cx="28" cy="17" rx="2" ry="3" />
    </motion.g>
  );
};

const Eyes02 = () => {
  return (
    <motion.g
      id="Eyes02"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <ellipse id="eyeball01" cx="12" cy="17" rx="2" ry="3" />
      <path
        id="eyeball02"
        d="M43.58,31.18c0-.2-1.45-4.83-4-4.83S35.53,31,35.47,31.17a.39.39,0,0,0,.19.47.39.39,0,0,0,.5-.1c.87-1.1,2.58-2.85,3.45-2.85s2.49,1.74,3.27,2.83a.39.39,0,0,0,.7-.34Z"
        transform="translate(-12 -12)"
      />
    </motion.g>
  );
};

const Eyes03 = () => {
  return (
    <motion.g
      id="Eyes03"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <path
        id="eyeball01"
        data-name="eyeball01"
        d="M43.58,31.18c0-.2-1.45-4.83-4-4.83S35.53,31,35.47,31.17a.39.39,0,0,0,.19.47.39.39,0,0,0,.5-.1c.87-1.1,2.58-2.85,3.45-2.85s2.49,1.74,3.27,2.83a.39.39,0,0,0,.7-.34Z"
        transform="translate(-12 -12)"
      />
      <path
        id="eyeball02"
        data-name="eyeball02"
        d="M19.88,31.18c.06-.2,1.46-4.83,4-4.83S27.93,31,28,31.17a.39.39,0,0,1-.19.47.41.41,0,0,1-.18.05.37.37,0,0,1-.31-.15c-.88-1.1-2.59-2.85-3.46-2.85s-2.49,1.74-3.27,2.83a.39.39,0,0,1-.7-.34Z"
        transform="translate(-12 -12)"
      />
    </motion.g>
  );
};

const Eyes04 = () => {
  return (
    <motion.g
      id="Eyes04"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <path
        id="eyeball01"
        d="M36.3,27.38c-1,.47-1.81.76-1.81,1.21s.73.73,1.59,1.12c3.67,1.64,6,3.29,6.4,2.82a.44.44,0,0,0,.07-.19c0-.14,0-.46-.61-1-1.27-1-4.11-2-4.13-2.76,0-.42,1.18-1.1,3.57-2.45.35-.2,1.24-.7,1.17-1.2a.29.29,0,0,0-.06-.17C42.12,24.32,40,25.74,36.3,27.38Z"
        transform="translate(-12 -12)"
      />
      <path
        id="eyeball02"
        d="M27.12,27.38c1.05.47,1.81.76,1.81,1.21s-.73.73-1.59,1.12c-3.67,1.64-6,3.29-6.4,2.82a.44.44,0,0,1-.07-.19c0-.14,0-.46.61-1,1.27-1,4.11-2,4.13-2.76,0-.42-1.18-1.1-3.57-2.45-.35-.2-1.24-.7-1.17-1.2a.29.29,0,0,1,.06-.17C21.3,24.32,23.4,25.74,27.12,27.38Z"
        transform="translate(-12 -12)"
      />
    </motion.g>
  );
};

const Eyes05 = () => {
  return (
    <motion.g
      id="Eyes05"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <path
        id="eyeball01-2"
        data-name="eyeball01"
        d="M29.8,20.17h0a4.78,4.78,0,0,0-5.34-3,3.83,3.83,0,0,0-.58.16l-.2.08h0a7.18,7.18,0,0,0-3.33,3A7.09,7.09,0,0,0,16.11,19h-.22a3.81,3.81,0,0,0-.59.08A4.79,4.79,0,0,0,11.63,24h0a5.36,5.36,0,0,0,.12,1,5.15,5.15,0,0,0,.36,1.11c2.22,5.34,11.23,8.32,11.23,8.32s7-6.39,6.87-12.16a5.17,5.17,0,0,0-.12-1.17A6.37,6.37,0,0,0,29.8,20.17Z"
        transform="translate(-11.63 -12)"
        style={{ fill: "#f61318" }}
      />
      <path
        id="eyeball02-2"
        data-name="eyeball02"
        d="M33.63,21.11a5.17,5.17,0,0,0-.12,1.17c-.15,5.77,6.87,12.16,6.87,12.16s9-3,11.23-8.32A5.15,5.15,0,0,0,52,25a5.36,5.36,0,0,0,.12-1h0a4.79,4.79,0,0,0-3.67-4.9,3.81,3.81,0,0,0-.59-.08h-.22a7.13,7.13,0,0,0-4.25,1.37,7.14,7.14,0,0,0-3.32-3h0l-.2-.08a3.83,3.83,0,0,0-.58-.16,4.78,4.78,0,0,0-5.34,3h0A6.37,6.37,0,0,0,33.63,21.11Z"
        transform="translate(-11.63 -12)"
        style={{ fill: "#f61318" }}
      />
    </motion.g>
  );
};

export default ({ selected }) => {
  return (
    <g id="eyes">
      <AnimatePresence>
        {selected === "Eyes01" && <Eyes01 key={selected} />}
        {selected === "Eyes02" && <Eyes02 key={selected} />}
        {selected === "Eyes03" && <Eyes03 key={selected} />}
        {selected === "Eyes04" && <Eyes04 key={selected} />}
        {selected === "Eyes05" && <Eyes05 key={selected} />}
      </AnimatePresence>
    </g>
  );
};

export const eyesList = [Eyes01, Eyes02, Eyes03, Eyes04, Eyes05];
