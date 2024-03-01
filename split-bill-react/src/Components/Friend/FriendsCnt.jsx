import React from 'react'
import styled from 'styled-components'
import FriendList from './FriendList'
import AddFriend from './AddFriend'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 100%;
  padding: 0px 10px;
  margin: 0;
`
const FriendsCnt = ({split,setSplit,friendArr,setFriendArr,showform,setShowForm,friendObj,setFriendObj,yourExpense,setYourExpense,friendExpense,setFriendExpense}) => {
  return (
    <Container>
      <FriendList 
      friendArr={friendArr} setFriendArr={setFriendArr} 
      showform={showform} setShowForm={setShowForm} 
      split={split} setSplit={setSplit} 
      friendObj={friendObj} setFriendObj={setFriendObj}
      yourExpense={yourExpense} setYourExpense={setYourExpense}
      friendExpense={friendExpense} setFriendExpense={setFriendExpense}
      />
      

      {!showform && <AddFriend showform={showform} setShowForm={setShowForm} friendArr={friendArr}
      setFriendArr={setFriendArr}/>}
    </Container>
  )
}

export default FriendsCnt
