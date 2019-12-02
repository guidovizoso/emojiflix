import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Drop01 = () => {
  return (
    <motion.g
      id="Drop01"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <defs>
        <linearGradient
          id="drop-gradient-2"
          x1="10.17"
          y1="31.58"
          x2="10.17"
          y2="50.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#69d2fa" />
          <stop offset="1" stopColor="#6dc5b2" />
        </linearGradient>
        <linearGradient
          id="drop-gradient-3"
          x1="-33.31"
          y1="31.58"
          x2="-33.31"
          y2="50.04"
          gradientTransform="matrix(-1, 0, 0, 1, 20.34, 0)"
          xlinkHref="#drop-gradient-2"
        />
      </defs>
      <path
        d="M20.27,43.29a1,1,0,0,0,.05-.16c.63-1.84-.39-4.65-.89-6.49A10.12,10.12,0,0,1,19.32,33l.11-.66s.13-.84-2,.67a12.23,12.23,0,0,0-5.09,8.21,3.25,3.25,0,0,0-.1.83,4,4,0,0,0,4.15,3.85,4.13,4.13,0,0,0,3.9-2.57h0S20.26,43.3,20.27,43.29Z"
        transform="translate(-12 -12)"
        style={{ fill: "url(#drop-gradient-2)" }}
      />
      <path
        d="M43.93,43.29a1,1,0,0,1,0-.16c-.63-1.84.39-4.65.88-6.49A9.93,9.93,0,0,0,44.88,33l-.12-.66s-.12-.84,2.05.67a12.23,12.23,0,0,1,5.09,8.21,3.77,3.77,0,0,1,.1.83,4,4,0,0,1-4.15,3.85A4.13,4.13,0,0,1,44,43.33h0S43.94,43.3,43.93,43.29Z"
        transform="translate(-12 -12)"
        style={{ fill: "url(#drop-gradient-3)" }}
      />
    </motion.g>
  );
};

const Drop02 = () => {
  return (
    <motion.g
      id="Drop02"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <defs>
        <linearGradient
          id="linear-gradient-2"
          x1="48.37"
          y1="16.94"
          x2="48.37"
          y2="28.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#69d2fa" />
          <stop offset="1" stopColor="#6dc5b2" />
        </linearGradient>
      </defs>
      <path
        id="drop02"
        d="M52.48,24.91c.08-2-3.13-6.79-3.94-7.89a.19.19,0,0,0-.31,0c-.7,1-3.89,5.28-4,7.89C44.41,30.1,52.13,30.32,52.48,24.91Z"
        transform="translate(-11.64 -12)"
        style={{ fill: "url(#linear-gradient-2)" }}
      />
    </motion.g>
  );
};

const Drop03 = () => {
  return (
    <motion.g
      id="Drop03"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <defs>
        <linearGradient
          id="linear-gradient-2"
          x1="48.37"
          y1="16.94"
          x2="48.37"
          y2="28.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#69d2fa" />
          <stop offset="1" stopColor="#6dc5b2" />
        </linearGradient>
      </defs>
      <path
        id="drop03"
        d="M19.86,42c.08-2-3.13-6.8-3.94-7.9a.19.19,0,0,0-.31,0c-.7,1-3.89,5.28-4,7.89C11.79,47.19,19.51,47.42,19.86,42Z"
        transform="translate(-11.64 -12)"
        style={{ fill: "url(#linear-gradient-2)" }}
      />
    </motion.g>
  );
};

export default ({ selected }) => {
  return (
    <g id="drop">
      <AnimatePresence>
        {selected === "Drop01" && <Drop01 key={selected} />}
        {selected === "Drop02" && <Drop02 key={selected} />}
        {selected === "Drop03" && <Drop03 key={selected} />}
      </AnimatePresence>
    </g>
  );
};

export const dropList = [Drop01, Drop02, Drop03];
