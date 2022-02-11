import styled from '@emotion/styled'
import React from 'react'
const Container = styled.div`
    height:30px;
    background-color: green;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: bolder;
`

function Announcements() {
  return (
    <Container>
        Super Deal! 50% on iPhone10.
    </Container>
  )
}

export default Announcements