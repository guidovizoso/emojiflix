import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Controls from "./Controls";
import Eyes from "./Face/Eyes";
import Mouth from "./Face/Mouth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Border = styled.div`
  border: 1px solid #eee;
  width: 100%;
  max-width: 400px;
  padding: 24px 48px;
`;

export default function() {
  const [eyes, setEyes] = useState("Eyes01");
  const [mouth, setMouth] = useState("Mouth01");
  const [rofl, setRofl] = useState(false);
  return (
    <Container>
      <Controls
        selectedEyes={eyes}
        handleSetEyes={setEyes}
        selectedMouth={mouth}
        handleSetMouth={setMouth}
        rofl={rofl}
        handleSetRofl={setRofl}
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
              <stop offset="0" stop-color="#ffce10" />
              <stop offset="1" stop-color="#ffe406" />
            </linearGradient>
          </defs>
          <title>face</title>
          <motion.g
            id="emoji"
            style={{ transformOrigin: "center" }}
            animate={rofl ? "isRofl" : "isNotRofl"}
            variants={variants}
          >
            <circle
              cx="20"
              cy="20"
              r="20"
              style={{ fill: "url(#linear-gradient)" }}
            />
            <Eyes selected={eyes} />
            <Mouth selected={mouth} />
          </motion.g>
        </svg>
      </Border>
    </Container>
  );
}

const variants = {
  isRofl: { rotate: "-45deg" },
  isNotRofl: { rotate: "0deg" }
};
