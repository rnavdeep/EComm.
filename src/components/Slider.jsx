import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Description } from '@mui/icons-material';
import { useState } from 'react';
import { sliderItems } from '../data';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #c3dfc3;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: green;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==="left" &&"10px"};
    right:${props=>props.direction==="right" &&"10px"};
    margin:auto;
    cursor: pointer;
    z-index: 2;
`

const Wrapper = styled.div`
    height:100%;
    display: flex;
    padding-top: 100px;
    padding-left: 100px;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1.5s ease;

`
const Slide = styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex:1;
    
`
const ImageContainer = styled.div`
    flex:1;
    padding: 10px;
    height: 100%;
    
`
const Info = styled.div`
    flex:1;
    padding: 50px;
`
const Image = styled.img`
height:80%;
`
const Title = styled.h1`
font-size: 70px;
    
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction ==="left"){
            setslideIndex(slideIndex>0 ? slideIndex-1: 3)
        }else{
            setslideIndex(slideIndex<3 ? slideIndex+1: 0)
        }

    };

  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                    <Desc>
                        {item.desc}
                    </Desc>
                    <Button>
                        Show now.
                    </Button>
                </Info>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction ="right" onClick={()=>handleClick("left")}>
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider