import React from "react";
import styled from "styled-components";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import profilePicture from "../images/s6.jpg";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Comments from "../components/Comments";

const Container = styled.div`
  display: flex;
`;
const Current = styled.div`
  flex: 5;
  margin: 0px 30px;
`;
const Recommendations = styled.div`
  flex: 2;
`;
const VideoWrapper = styled.div`
  width: 1280px;
  height: 720px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.bgLighter};
  font-size: 14px;
  padding: 7px 14px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Texts = styled.div``;

const Channel = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px 0px 1px 0px;
  cursor: pointer;
`;
const ViewInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 7px 0px 7px 2px;
`;

export default function Video() {
  return (
    <Container>
      <Current>
        <VideoWrapper>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yIaXoop8gl4?si=6CI1fQ6Ygoznq8F7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>What is React?</Title>
        <Info>
          <Channel>
            <ChannelImage src={profilePicture} alt="Profile Picture" />
            <Texts>
              <ChannelName>BilalDev</ChannelName>
              <ViewInfo>660,300 views • 4 hours ago</ViewInfo>
            </Texts>
          </Channel>
          <Buttons>
            <Button>
              <NotificationsNoneOutlinedIcon />
              Subscribe
            </Button>
            <Button>
              <ThumbUpOutlinedIcon /> Like
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon style={{ transform: "rotate(180deg)" }} />
              Share
            </Button>
            <Button>
              <DownloadForOfflineOutlinedIcon />
              Download
            </Button>
          </Buttons>
        </Info>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          recusandae optio modi dolores veniam tempore ullam eos ex voluptas
          amet ducimus, cum et temporibus. Sunt minima unde commodi voluptatem
          ipsa.
        </Description>

        <Comments />
      </Current>
      <Recommendations>Video recommendations for you</Recommendations>
    </Container>
  );
}
