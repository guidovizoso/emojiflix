import React from "react";
import styled from "styled-components";

import { eyesList } from "../Face/Eyes";
import { mouthList } from "../Face/Mouth";

const Container = styled.ul`
  height: 100px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0 24px;
`;

const Item = styled.li`
  height: 64px;
  width: 64px;
  margin: 0 24px 0 0;
`;

const Svg = styled.svg`
  transition: all 0.5s;
  transform: ${props => (props.isSelected ? "scale(1.2)" : "scale(1)")};
  opacity: ${props => (props.isSelected ? 1 : 0.7)};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default ({
  selectedEyes,
  handleSetEyes,
  selectedMouth,
  handleSetMouth
}) => {
  return (
    <>
      <Container>
        {eyesList.map(e => {
          return (
            <Item
              key={e.name}
              onClick={() => {
                console.log("changing eyes to", e.name);
                handleSetEyes(e.name);
              }}
            >
              <Svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64px"
                height="64px"
                viewBox="0 0 40 40"
                isSelected={selectedEyes === e.name}
              >
                <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
                {e()}
              </Svg>
            </Item>
          );
        })}
      </Container>
      <Container>
        {mouthList.map(e => {
          return (
            <Item
              key={e.name}
              onClick={() => {
                console.log("changing mouth to", e.name);
                handleSetMouth(e.name);
              }}
            >
              <Svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64px"
                height="64px"
                viewBox="0 0 40 40"
                isSelected={selectedMouth === e.name}
              >
                <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
                {e()}
              </Svg>
            </Item>
          );
        })}
      </Container>
    </>
  );
};
