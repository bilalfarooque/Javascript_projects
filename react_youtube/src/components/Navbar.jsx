import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  top: 0;
  position: sticky;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 100%;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  gap: 3px;
  color: ${({ theme }) => theme.text};
  border: 1px solid #9c9c9c;
  margin: auto;
  border-radius: 3px;
`;
const Input = styled.input`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  outline: none;
  border: none;
  padding: 5px;
  padding-left: 5px;
  align-items: flex-start;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  outline: none;
  font-weight: 400;
  cursor: pointer;
  margin: 10px 0px;
  transition: all 0.2s ease-in-out;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
}
