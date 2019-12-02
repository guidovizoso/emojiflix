import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0 48px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  font-weight: 500;
  text-align: center;
  padding: 0 0 8px 0;
  margin: 0;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  color: #aaa;
  font-weight: 400;
  text-align: center;
  padding: 0 0 8px 0;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: #aaa;
`;

export default () => {
  return (
    <Nav>
      <Title>Emojiflix</Title>
      <Subtitle>Emoji playground built with React &amp; SVG</Subtitle>
      <List>
        <Item>
          <Link href="https://github.com/guidovizoso/emojiflix" target="_blank">
            Source code
          </Link>
        </Item>
        <Item>
          <Link href="https://github.com/guidovizoso" target="_blank">
            Github
          </Link>
        </Item>
        <Item>
          <Link href="https://dev.to/guidovizoso" target="_blank">
            DEV.to
          </Link>
        </Item>
      </List>
    </Nav>
  );
};
