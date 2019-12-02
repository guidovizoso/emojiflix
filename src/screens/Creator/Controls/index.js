import React from "react";
import styled from "styled-components";

import { eyesList } from "../Face/Eyes";
import { mouthList } from "../Face/Mouth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Wrapper = styled.div``;

const Control = styled.ul`
  height: 130px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0 24px;
  overflow-x: scroll;
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
  handleSetMouth,
  rofl,
  handleSetRofl
}) => {
  return (
    <Container>
      <Wrapper>
        <span>eyes</span>
        <Control>
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
                  viewBox="-10 -10 60 60"
                  isSelected={selectedEyes === e.name}
                >
                  <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
                  {e()}
                </Svg>
              </Item>
            );
          })}
        </Control>
      </Wrapper>
      <Wrapper>
        <span>mouth</span>
        <Control>
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
                  viewBox="-10 -10 60 60"
                  isSelected={selectedMouth === e.name}
                >
                  <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
                  {e()}
                </Svg>
              </Item>
            );
          })}
        </Control>
      </Wrapper>
      <Wrapper>
        <span>effects</span>
        <Control>
          <Item
            key="rofl"
            onClick={() => {
              handleSetRofl(!rofl)
            }}
          >
            <Svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="64px"
              height="64px"
              viewBox="-10 -10 60 60"
              isSelected={rofl}
            >
              <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
              <g id="line">
                <path
                  d="M54.2,32a22.16,22.16,0,0,1-7.55,16.66l.46.92a23.16,23.16,0,0,0-.73-35.77l-.74.7A22.16,22.16,0,0,1,54.2,32Z"
                  transform="translate(-12 -11.37)"
                  style={{fill: "#231f20"}}
                />
              </g>
              <polygon
                id="arrow"
                points="31.39 0 33.13 6.5 37.89 1.74 31.39 0"
                style={{fill: "#231f20"}}
              />
              <g id="text">
                <path
                  d="M23,36.29a2.17,2.17,0,0,1,1.38-.72,1.6,1.6,0,0,1,1.29.53,2,2,0,0,1,.56.95A1.41,1.41,0,0,1,26,38.11v0a1.11,1.11,0,0,1,.47-.2,1,1,0,0,1,.43,0,1.76,1.76,0,0,1,.4.18,4.44,4.44,0,0,1,.38.27l.37.33c.13.12.26.22.39.32a2.92,2.92,0,0,0,.4.25,1.36,1.36,0,0,0,.42.13l-.7.7a.58.58,0,0,1-.28-.11,2.27,2.27,0,0,1-.31-.25l-.35-.32a3.52,3.52,0,0,0-.39-.31,3.85,3.85,0,0,0-.4-.26,1,1,0,0,0-.4-.15.84.84,0,0,0-.41,0,1.43,1.43,0,0,0-.44.3L24.1,40.6l2,2-.63.63-4.73-4.72Zm2.27,2a1.29,1.29,0,0,0,.22-.48,1,1,0,0,0,0-.5,1.23,1.23,0,0,0-.33-.51,1.2,1.2,0,0,0-.78-.38,1.15,1.15,0,0,0-.87.42l-1.56,1.56,1.65,1.65,1.31-1.31A3.79,3.79,0,0,0,25.26,38.31Z"
                  transform="translate(-12 -11.37)"
                />
                <path
                  d="M26.61,35.54a3.19,3.19,0,0,1-.37-1.22,3,3,0,0,1,.16-1.26,3.31,3.31,0,0,1,.78-1.19,3.26,3.26,0,0,1,1.19-.78,2.89,2.89,0,0,1,1.26-.16,3.19,3.19,0,0,1,1.22.37,4.25,4.25,0,0,1,1.07.78,4.11,4.11,0,0,1,.79,1.08,3.33,3.33,0,0,1,.37,1.21,3.05,3.05,0,0,1-.17,1.26,3.26,3.26,0,0,1-.78,1.19,3.31,3.31,0,0,1-1.19.78,2.86,2.86,0,0,1-1.25.16,3.36,3.36,0,0,1-1.22-.36,4.34,4.34,0,0,1-1.08-.79A4.25,4.25,0,0,1,26.61,35.54Zm2.21,1.06a2.82,2.82,0,0,0,.92.33,2.29,2.29,0,0,0,2.44-1.55,2.2,2.2,0,0,0,.06-1,2.61,2.61,0,0,0-.33-.92,4,4,0,0,0-.62-.8,3.62,3.62,0,0,0-.79-.61,2.93,2.93,0,0,0-.92-.34,2.11,2.11,0,0,0-1.87.64,2.2,2.2,0,0,0-.57.91,2,2,0,0,0-.06,1,2.68,2.68,0,0,0,.33.92A4.27,4.27,0,0,0,28,36,4.39,4.39,0,0,0,28.82,36.6Z"
                  transform="translate(-12 -11.37)"
                />
                <path
                  d="M33.43,25.85l.53.53-2.47,2.47,1.5,1.5,2.17-2.17.53.53-2.17,2.17,2.16,2.17-.62.63L30.33,29Z"
                  transform="translate(-12 -11.37)"
                />
                <path
                  d="M34.76,24.52,39,28.72l2.51-2.5.53.53-3.14,3.13-4.72-4.73Z"
                  transform="translate(-12 -11.37)"
                />
                <path
                  d="M42.51,24.75l.73.74-.73.73-.73-.73Zm-.7-.25-.29.29L39.29,22.9l-1.45-1.46.62-.63,1.46,1.46Z"
                  transform="translate(-12 -11.37)"
                />
              </g>
            </Svg>
          </Item>
        </Control>
      </Wrapper>
    </Container>
  );
};
