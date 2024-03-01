import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 5px 0;
  padding: 2px 8px;
`;
const FriendDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 20px;
  width: 100%;
`;
const FriendImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;
const FriendInfo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;
const FriendName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin: 0;
`;
const FriendMoney = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #484b4b;
  font-family: sans-serif;
  margin: 0;
`;
const Button = styled.button`
  background-color: #fd9e40;
  width: 100px;
  outline: none;
  border: none;
  padding: 8px 15px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color: #2c2c2c;
  margin-right: 10px;
  cursor: pointer;
`;
const FriendBlock = ({
  split,
  setSplit,
  singlefriend,
  index,
  friendArr,
  setFriendArr,
  friendObj,
  setFriendObj,
}) => {
  const select = (friendstatus, index) => {
    console.log(friendstatus);
    friendArr[index].status = !friendstatus;
    console.log(friendArr[index]);
    setFriendArr(friendArr);
    setSplit(true);
    const obj = {
      id: index,
      ...singlefriend,
    };
    setFriendObj(obj);
  };
  const close = (friendstatus, index) => {
    friendArr[index].status = !friendstatus;
    setFriendArr(friendArr);
    setSplit(false);
  };
  return (
    <Container
      style={{
        backgroundColor: singlefriend.status ? "#fcf2e0" : "transparent",
        borderRadius: "5px",
      }}
    >
      <FriendDetail>
        <FriendImg src={singlefriend.friendImg} />
        <FriendInfo>
          <FriendName>{singlefriend.friendName}</FriendName>
          <FriendMoney
            style={{
              color: singlefriend.rupee
                ? singlefriend.rupee > 0
                  ? "green"
                  : "red"
                : "#000",
              fontWeight: 600,
            }}
          >
            {singlefriend.rupee
              ? singlefriend.rupee > 0
                ? `${singlefriend.friendName} owes you Rs:${singlefriend.rupee}`
                : `You owe ${singlefriend.friendName} Rs:${singlefriend.rupee}`
              : `You and ${singlefriend.friendName} are Even`}
          </FriendMoney>
        </FriendInfo>
      </FriendDetail>
      {singlefriend.status ? (
        <Button onClick={() => close(singlefriend.status, index)}>Close</Button>
      ) : (
        <Button onClick={() => select(singlefriend.status, index)}>
          Select
        </Button>
      )}
    </Container>
  );
};

export default FriendBlock;
