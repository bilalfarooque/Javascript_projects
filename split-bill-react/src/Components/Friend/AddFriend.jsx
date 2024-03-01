import React, { useState } from "react";
import styled from "styled-components";
import profilePic from "../../assets/Images/profile.png";
import imageIcon from "../../assets/Images/Imageicon.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FriendAdd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcf2e0;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
`;
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0;
  color: #258888;
`;
const FieldText = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const FieldImg = styled.img`
  width: 25px;
  height: 25px;
`;
const FieldTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const FieldInput = styled.input`
  height: 30px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  width: 50%;
  outline: none;
  padding-left: 10px;
  font-size: 14px;
  letter-spacing: 0.07em;
`;
const Button = styled.button`
  background-color: #fd9e40;
  border: none;
  padding: 8px 15px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color: #2c2c2c;
  margin: 10px 0px;
  margin-left: auto;
  width: 120px;
`;
const Close = styled.button`
  background-color: #fd9e40;
  width: fit-content;
  border: none;
  padding: 8px 15px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  color: #2c2c2c;
  margin: 10px 0px;
  margin-left: auto;
`;
const AddFriend = ({ showform, setShowForm, friendArr, setFriendArr }) => {
  const closebtn = () => {
    setShowForm(!showform);
  };
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("");
  const addfriend = () => {
    if (!friendName || !friendImg) return alert("Please Fill all values");
    const friends = [...friendArr];
    friends.push({
      friendName,
      friendImg,
    });
    setFriendArr(friends);
    // setFriendName('')
    // setFriendImg('')
    setShowForm(!showform);
  };
  return (
    <Container>
      <FriendAdd>
        <Field>
          <FieldText>
            <FieldImg src={profilePic} alt="Profile Picture" />
            <FieldTitle>Friend Name :</FieldTitle>
          </FieldText>
          <FieldInput onChange={(e) => setFriendName(e.target.value)} />
        </Field>
        <Field>
          <FieldText>
            <FieldImg src={imageIcon} alt="Image Icon" />
            <FieldTitle>Image URL :</FieldTitle>
          </FieldText>
          <FieldInput onChange={(e) => setFriendImg(e.target.value)} />
        </Field>
        <Button onClick={addfriend}>Add</Button>
      </FriendAdd>
      <Close onClick={closebtn}>Close</Close>
    </Container>
  );
};

export default AddFriend;
