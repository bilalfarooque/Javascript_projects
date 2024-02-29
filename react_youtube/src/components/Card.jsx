import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.png'
import profilePicture from  '../images/s6.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    margin-bottom: 45px;
    width: 200px;
    cursor: pointer;
`
const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;

`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
    
    `
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    
    `

const Texts = styled.div`


`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin: 0;
`
const ChannelName = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSoft};
    margin: 8px 0px 1px 0px;

`
const ViewInfo = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin: 0px;
`

export default function Card() {
  return (
    <Link to="/video/test" style={{textDecoration : "none"}}>
    <Container >
        <Image src={thumbnail} />
        <Details>
            <ChannelImage src={profilePicture} alt="Profile Picture" />
            <Texts>
                <Title>TestVideo</Title>
                <ChannelName>BilalDev</ChannelName>
                <ViewInfo>660,300 views  • 4 hours ago</ViewInfo>
            </Texts>

        </Details>
    </Container>
    </Link>
  )
}
