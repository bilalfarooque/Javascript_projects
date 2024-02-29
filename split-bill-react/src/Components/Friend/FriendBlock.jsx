import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 5px 0;
`;
const FriendDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 20px;
`;
const FriendImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
const FriendInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
const FriendName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
const FriendMoney = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #484b4b;
  font-family: sans-serif;
`;
const Button = styled.button`
  background-color: #fd9e40;
  width: fit-content;
  border: none;
  padding: 8px 15px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color: #2c2c2c;
  margin-right: 10px;
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
  const select = (splitstatus, number) => {
    friendArr[number].status = !splitstatus;
    setFriendArr(friendArr);
    setSplit(true);
    const obj = {
      id: index,
      ...singlefriend,
    };
    setFriendObj(obj);
  };
  const close = (splitstatus, number) => {
    friendArr[number].status = !splitstatus;
    setFriendArr(friendArr);
    setSplit(false);
  };
  return (
    <Container>
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
