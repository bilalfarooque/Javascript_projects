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
  justify-content: space-between;
  padding: 0px 20px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const Input = styled.input``;
const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  outline: none;
  border-radius: 3px;
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
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Search>
      </Wrapper>
    </Container>
  );
}
