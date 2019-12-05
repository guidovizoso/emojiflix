import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const overlay = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  },
  hidden: { opacity: 0 }
};

const container = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  width: 90vw;
  height: 50vh;
  max-height: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50vw;
    max-width: 600px;
  }
`;

const Emoji = styled(motion.div)`
  max-width: 50%;
  max-height: 50%;
`;

const Download = styled(motion.a)`
  background-color: #333;
  padding: 12px 24px;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Close = styled(motion.button)`
  padding: 12px 24px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
`;

export default props => {
  const { emoji, toggleModal } = props;

  const svgBlob = new Blob([emoji.current.innerHTML], {
    type: "image/svg+xml"
  });
  const svgEmoji = URL.createObjectURL(svgBlob);

  return (
    <Overlay initial="hidden" animate="visible" variants={overlay}>
      <Container variants={container}>
        <Emoji
          animate={{
            y: [0, -20, 0, 0, 0]
          }}
          transition={{
            loop: Infinity,
            type: "spring",
            duration: 2
          }}
          dangerouslySetInnerHTML={{ __html: emoji.current.innerHTML }}
        />
        <Download
          href={svgEmoji}
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download SVG
        </Download>
        <Close
          onClick={() => toggleModal(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Close
        </Close>
      </Container>
    </Overlay>
  );
};
