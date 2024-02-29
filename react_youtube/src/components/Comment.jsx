import React from 'react'
import styled from 'styled-components'
import personPic from '../images/s2.jpg'


const Container = styled.div`
    display: flex;
    margin: 20px 0px;
    gap: 10px;
`

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

const 

export default function Comment() {
  return (
    <Container>
        <Avatar src= {personPic} />

    </Container>
  )
}
