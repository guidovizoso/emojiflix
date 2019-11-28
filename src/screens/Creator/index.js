import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Border = styled.div`
  border: 1px solid #e4e4e4;
  width: 50%;
  height: 50%;
`;

const renderEyes = ({ eyes }) => {
  switch (eyes) {
    case 1:
      return (
        <g id="eyes01">
          <ellipse cx="250" cy="350" rx="45" ry="60" />
          <ellipse cx="550" cy="350" rx="45" ry="60" />
        </g>
      );
    case 2:
      return (
        <g id="eyes02">
          <ellipse cx="250" cy="350" rx="45" ry="60" />
          <path
            id="eye02"
            d="M628.34,448.52c-28.06,0-53,12.71-68.79,32.41a.9.9,0,0,1-1.22.32,2.91,2.91,0,0,1-.8-2.88c9.09-43.16,37.35-74.6,70.81-74.6s61.71,31.48,70.8,74.6a3.69,3.69,0,0,1-.18,2.09c-.43,1-1.25,1.21-1.83.47C681.34,461.23,656.4,448.52,628.34,448.52Z"
            transform="translate(-100 -100)"
          />
        </g>
      );
    default:
      return (
        <g id="eyes01">
          <ellipse cx="250" cy="350" rx="45" ry="60" />
          <ellipse cx="550" cy="350" rx="45" ry="60" />
        </g>
      );
  }
};

const renderMouth = ({ mouth }) => {
  switch (mouth) {
    case 1:
      return (
        <path
          id="mouth01"
          d="M667.41,653.88a3.19,3.19,0,0,1,4.9,3.63c-22.11,61-90.88,105.54-172.31,105.54S349.8,718.56,327.69,657.51a3.19,3.19,0,0,1,4.9-3.63C371,681.75,431.71,699.74,500,699.74S629,681.75,667.41,653.88Z"
          transform="translate(-100 -100)"
        />
      );
    case 2:
      return (
        <path
          id="mouth02"
          d="M500,723.35c-83.05,0-154.92-22.39-189.59-55a3.06,3.06,0,0,0-4.91,3.47c20,44.25,99.46,77.32,194.5,77.32s174.53-33.07,194.5-77.32a3.06,3.06,0,0,0-4.91-3.47C654.92,701,583.05,723.35,500,723.35Z"
          transform="translate(-100 -100)"
        />
      );
    case 3:
      return (
        <path
          id="mouth03"
          d="M365,703.79s225.08,34,323.44-57.45a4.23,4.23,0,0,1,6.72,4.81c-15.07,35.58-77,114.48-328.78,103.31a4.19,4.19,0,0,1-2.45-.91C335.68,730.67,358,702.85,365,703.79Z"
          transform="translate(-100 -100)"
        />
      );
    default:
      return (
        <path
          id="mouth01"
          d="M667.41,653.88a3.19,3.19,0,0,1,4.9,3.63c-22.11,61-90.88,105.54-172.31,105.54S349.8,718.56,327.69,657.51a3.19,3.19,0,0,1,4.9-3.63C371,681.75,431.71,699.74,500,699.74S629,681.75,667.41,653.88Z"
          transform="translate(-100 -100)"
        />
      );
  }
};

export default function() {
  const [eyes, setEyes] = useState(1);
  const [mouth, setMouth] = useState(1);
  return (
    <Container>
      <button onClick={() => setEyes(1)}>eyes 1</button>
      <button onClick={() => setEyes(2)}>eyes 2</button>
      <button onClick={() => setMouth(1)}>mouth 1</button>
      <button onClick={() => setMouth(2)}>mouth 3</button>
      <button onClick={() => setMouth(3)}>mouth 3</button>
      <Border>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 1600"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="500"
              y1="109.63"
              x2="500"
              y2="894.28"
              gradientTransform="matrix(1, 0, 0, -1, -100, 900)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffce10" />
              <stop offset="1" stop-color="#ffe406" />
            </linearGradient>
          </defs>
          <title>Emojiflix</title>
          <circle
            id="face"
            cx="400"
            cy="400"
            r="400"
            style={{ fill: "url(#linear-gradient)" }}
          />
          {renderEyes({ eyes })}
          {renderMouth({ mouth })}
        </svg>
      </Border>
    </Container>
  );
}
