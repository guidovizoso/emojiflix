import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Eyes01 = () => {
  return (
    <motion.g
      id="eyes01"
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

export const Eyes02 = () => {
  return (
    <motion.g
      id="eyes02"
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

export const Eyes03 = () => {
  return (
    <motion.g
      id="eyes03"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <path
        id="eyeball01-2"
        data-name="eyeball01"
        d="M43.58,31.18c0-.2-1.45-4.83-4-4.83S35.53,31,35.47,31.17a.39.39,0,0,0,.19.47.39.39,0,0,0,.5-.1c.87-1.1,2.58-2.85,3.45-2.85s2.49,1.74,3.27,2.83a.39.39,0,0,0,.7-.34Z"
        transform="translate(-12 -12)"
      />
      <path
        id="eyeball02-2"
        data-name="eyeball02"
        d="M19.88,31.18c.06-.2,1.46-4.83,4-4.83S27.93,31,28,31.17a.39.39,0,0,1-.19.47.41.41,0,0,1-.18.05.37.37,0,0,1-.31-.15c-.88-1.1-2.59-2.85-3.46-2.85s-2.49,1.74-3.27,2.83a.39.39,0,0,1-.7-.34Z"
        transform="translate(-12 -12)"
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
      </AnimatePresence>
    </g>
  );
};
