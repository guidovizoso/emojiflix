import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Controls from "./Controls";
import Color from "./Face/Color";
import Eyes from "./Face/Eyes";
import Mouth from "./Face/Mouth";
import Drop from "./Face/Drop";
import DownloadModal from "./DownloadModal";
import DownloadIcon from "../../components/DownloadIcon";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EmojiContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 24px;
  margin-left: 0;
  height: 300px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);

  @media (min-width: 768px) {
    margin-left: 48px;
    max-width: 400px;
    padding: 24px 48px;
    height: auto;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Download = styled(motion.button)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 16px 20px;
  cursor: pointer;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

export default function() {
  const [color, setColor] = useState("none");
  const [eyes, setEyes] = useState("Eyes01");
  const [mouth, setMouth] = useState("Mouth01");
  const [drop, setDrop] = useState("none");
  const [effect, setEffect] = useState("none");
  const [showModal, toggleModal] = useState(false);

  const emoji = useRef(null);

  return (
    <>
      <Container>
        <Controls
          selectedColor={color}
          handleSetColor={setColor}
          selectedEyes={eyes}
          handleSetEyes={setEyes}
          selectedMouth={mouth}
          handleSetMouth={setMouth}
          selectedDrop={drop}
          handleSetDrop={setDrop}
          selectedEffect={effect}
          handleSetEffect={setEffect}
        />
        <EmojiContainer>
          <Border ref={emoji}>
            <svg
              id="emoji"
              data-name="emoji"
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
              <title>Your emoji</title>
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
                <Drop selected={drop} />
              </motion.g>
            </svg>
          </Border>
          <Download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleModal(true)}
          >
            <DownloadIcon />
          </Download>
        </EmojiContainer>
      </Container>
      {showModal && <DownloadModal toggleModal={toggleModal} emoji={emoji} />}
    </>
  );
}

const variants = {
  none: { rotate: "0deg" },
  Rofl: { rotate: "-45deg" },
  UpsideDown: { rotate: "-180deg" }
};
