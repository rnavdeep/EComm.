import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { Announcement } from '@mui/icons-material';
//styled components

const Container = styled.div`
        height:60px;
        background-color: #8fcddd;
`
const Wrapper = styled.div`
        padding:10px 20px;
        display:flex;
        justify-content: space-between;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;

`
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
`
const SearchContainer = styled.div`
    border: 1px solid darkgray;
    display: flex;
    align-items: center;
    margin-left:20px;
    padding: 5px;
    background-color: white;
`
const Input= styled.input`
    border:none;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left: 20px;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>English</Language>
                <SearchContainer>
                    <Input></Input>
                    <SearchIcon></SearchIcon>
                </SearchContainer>
            </Left>
            <Center><Logo>Ecomm.</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <MenuItem>
                <Badge badgeContent={2} color="primary">
                     <ShoppingCartOutlinedIcon  color="action" />
                </Badge>

                </MenuItem>


            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar