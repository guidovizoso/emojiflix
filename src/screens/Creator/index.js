import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Controls from "./Controls";
import Color from "./Face/Color";
import Eyes from "./Face/Eyes";
import Mouth from "./Face/Mouth";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Border = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  width: 100%;
  padding: 24px;
  margin-left: 0;
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
  height: 300px;

  @media (min-width: 768px) {
    margin-left: 48px;
    max-width: 400px;
    padding: 24px 48px;
    height: auto;
  }
`;

export default function() {
  const [color, setColor] = useState("none");
  const [eyes, setEyes] = useState("Eyes01");
  const [mouth, setMouth] = useState("Mouth01");
  const [effect, setEffect] = useState("none");
  return (
    <Container>
      <Controls
        selectedColor={color}
        handleSetColor={setColor}
        selectedEyes={eyes}
        handleSetEyes={setEyes}
        selectedMouth={mouth}
        handleSetMouth={setMouth}
        selectedEffect={effect}
        handleSetEffect={setEffect}
      />
      <Border>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          viewBox="-10 -10 60 60"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="20"
              y1="39.52"
              x2="20"
              y2="0.29"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffce10" />
              <stop offset="1" stopColor="#ffe406" />
            </linearGradient>
          </defs>
          <title>face</title>
          <motion.g
            id="emoji"
            style={{ transformOrigin: "center" }}
            animate={effect}
            variants={variants}
          >
            <circle
              cx="20"
              cy="20"
              r="20"
              style={{ fill: "url(#linear-gradient)" }}
            />
            <Color selected={color} />
            <Eyes selected={eyes} />
            <Mouth selected={mouth} />
          </motion.g>
        </svg>
      </Border>
    </Container>
  );
}

const variants = {
  none: { rotate: "0deg" },
  Rofl: { rotate: "-45deg" },
  UpsideDown: { rotate: "-180deg" }
};
