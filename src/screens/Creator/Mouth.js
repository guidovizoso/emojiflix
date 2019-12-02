import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Mouth01 = () => {
  return (
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      id="mouth01"
      d="M40.73,40a.18.18,0,0,1,.24,0,.16.16,0,0,1,0,.15c-1.15,3-4.74,5.27-9,5.27s-7.84-2.22-9-5.27a.15.15,0,0,1,.1-.2.18.18,0,0,1,.16,0A15.79,15.79,0,0,0,32,42.32,15.79,15.79,0,0,0,40.73,40Z"
      transform="translate(-12 -12)"
    />
  );
};

export const Mouth02 = () => {
  return (
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      id="mouth02"
      d="M32,43.16a15.79,15.79,0,0,0-8.73,2.29.18.18,0,0,1-.16,0,.15.15,0,0,1-.1-.2C24.16,42.22,27.75,40,32,40s7.84,2.22,9,5.27a.14.14,0,0,1,0,.14.19.19,0,0,1-.24,0A15.79,15.79,0,0,0,32,43.16Z"
      transform="translate(-12 -12)"
    />
  );
};

export const Mouth03 = () => {
  return (
    <motion.g
      id="mouth03"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <path
        d="M41.1,37.78c-1.24-.21-2.49-.39-3.75-.52a50.91,50.91,0,0,0-14.37.5A1.94,1.94,0,0,0,21.21,40a8.31,8.31,0,0,0,4.16,6.81A14,14,0,0,0,32,48.51c1.28-.19,2.58-.29,3.83-.6a8.64,8.64,0,0,0,7-7.91A1.94,1.94,0,0,0,41.1,37.78Z"
        transform="translate(-12 -12)"
      />
      <path
        d="M36.57,45.5c-1.93,1.28-6.68,1.43-9.2,0A15.52,15.52,0,0,1,36.57,45.5Z"
        transform="translate(-12 -12)"
        style={{ fill: "#ff7b9d" }}
      />
      <path
        d="M41,40.39c0,.53-.41.83-1,.83H32c-2.6,0-5.19,0-7.79,0a1.4,1.4,0,0,1-.92-.33c-.55-.54-.17-1.37.66-1.49,1.18-.16,2.35-.31,3.53-.41a56.31,56.31,0,0,1,10.14.09c.84.09,1.69.2,2.53.33A.88.88,0,0,1,41,40.39Z"
        transform="translate(-12 -12)"
        style={{ fill: "#f4f4f4" }}
      />
    </motion.g>
  );
};

export default ({ selected }) => {
  return (
    <g id="mouth">
      <AnimatePresence>
        {selected === "Mouth01" && <Mouth01 key={selected} />}
        {selected === "Mouth02" && <Mouth02 key={selected} />}
        {selected === "Mouth03" && <Mouth03 key={selected} />}
      </AnimatePresence>
    </g>
  );
};
