import React from "react";
import styled from "styled-components";
import personPic from "../images/s1.jpg";

const Container = styled.div`
  display: flex;
`;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textSoft};
  padding: 4px 5px;
  background-color: transparent;
  border-radius: 4px;
`;

export default function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={personPic} />
        <Input placeholder="Add a comment" />
      </NewComment>
    </Container>
  );
}
