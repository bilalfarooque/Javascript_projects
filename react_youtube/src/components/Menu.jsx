import React from "react";
import styled from "styled-components";
import logoImage from "../images/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  height: 100%;
  top: 0;
  position: sticky;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const SignIn = styled.div``;

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

export default function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logoImage} alt="logo" />
            YouTube.dev
          </Logo>

          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>

        <Item>
          <ExploreIcon />
          Explore
        </Item>

        <Item>
          <SubscriptionsIcon />
          Subscribtions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>

        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />

        <SignIn>
          Sign in to like, comment & share
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </SignIn>
        <Item>
          <LibraryMusicIcon />
          Library
        </Item>

        <Item>
          <SportsFootballIcon />
          Sports
        </Item>

        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>

        <Item>
          <MovieCreationIcon />
          Movies
        </Item>

        <Item>
          <NewspaperIcon />
          News
        </Item>

        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>

        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>

        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>

        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
}
