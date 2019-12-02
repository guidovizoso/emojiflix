import React from "react";
import styled from "styled-components";

import { colorList } from "../Face/Color";
import { eyesList } from "../Face/Eyes";
import { mouthList } from "../Face/Mouth";
import { effectList } from "../Face/Effect";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 400px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  border: 1px solid #eee;
  background-color: #fff;
  padding: 20px 0 20px 20px;
  border-radius: 6px;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
  position: relative;
`;

const Label = styled.span`
  font-weight: 400;
  color: #aaa;
  padding-bottom: 16px;
  display: block;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const Control = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Item = styled.li`
  height: 60px;
  width: 60px;
  margin: 0 12px 0 0;
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
  selectedColor,
  handleSetColor,
  selectedEyes,
  handleSetEyes,
  selectedMouth,
  handleSetMouth,
  selectedEffect,
  handleSetEffect
}) => {
  return (
    <Container>
      <Wrapper>
        <Label>eyes</Label>
        <Control>
          {eyesList.map(e => {
            let id = e().props.id;
            return (
              <Item
                key={id}
                onClick={() => {
                  console.log("changing eyes to", id);
                  handleSetEyes(id);
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
                  isSelected={selectedEyes === id}
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
        <Label>mouth</Label>
        <Control>
          {mouthList.map(e => {
            let id = e().props.id;
            return (
              <Item
                key={id}
                onClick={() => {
                  console.log("changing mouth to", id);
                  handleSetMouth(id);
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
                  isSelected={selectedMouth === id}
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
        <Label>color</Label>
        <Control>
          {colorList.map(e => {
            let id = e().props.id;
            return (
              <Item
                key={id}
                onClick={() => {
                  let v = id === selectedColor ? "none" : id;
                  console.log("changing color to", v);
                  handleSetColor(v);
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
                  isSelected={selectedColor === id}
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
        <Label>effect</Label>
        <Control>
          {effectList.map(e => {
            let id = e().props.id;
            return (
              <Item
                key={id}
                onClick={() => {
                  let v = id === selectedEffect ? "none" : id;
                  console.log("changing effect to", v);
                  handleSetEffect(v);
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
                  isSelected={selectedEffect === id}
                >
                  <circle cx="20" cy="20" r="20" style={{ fill: "#ffdc0a" }} />
                  {e()}
                </Svg>
              </Item>
            );
          })}
        </Control>
      </Wrapper>
    </Container>
  );
};
