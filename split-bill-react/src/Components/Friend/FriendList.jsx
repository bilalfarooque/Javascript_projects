import React from 'react'
import styled from 'styled-components'
import FriendBlock from './FriendBlock'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
const Friends = styled.div`
    display: flex;
    flex-direction: column;
    height: 255px;
    overflow-y: scroll;
    padding-left: 10px;
`
const Button = styled.button`
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
`
const FriendList = ({split,setSplit,friendArr,setFriendArr,showform,setShowForm,friendObj,setFriendObj,yourExpense,setYourExpense,friendExpense,setFriendExpense}) => {
  const show = () =>{
    setShowForm(!showform)
  }
  return (
    <Container>
      <Friends>
        {friendArr?.map((singlefriend,index)=>(<FriendBlock 
        singlefriend={singlefriend} index={index} split={split} setSplit={setSplit} 
        friendArr={friendArr} setFriendArr={setFriendArr} 
        friendObj={friendObj} setFriendObj={setFriendObj} 
        yourExpense={yourExpense} setYourExpense={setYourExpense} 
        friendExpense={friendExpense} setFriendExpense={setFriendExpense}
        />))}
      </Friends>
      {showform && <Button onClick={show}>Add Friend</Button>}
    </Container>
  )
}

export default FriendList
