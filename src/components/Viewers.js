import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
<Wrap>
  <img src='/images/viewers-disney.png'/>
</Wrap>
<Wrap>
  <img src='/images/viewers-starwars.png'/>
</Wrap>
<Wrap>
  <img src='/images/viewers-marvel.png'/>
</Wrap>
<Wrap>
  <img src='/images/viewers-national.png'/>
</Wrap>
<Wrap>
  <img src='/images/viewers-pixar.png'/>
</Wrap>

    </Container>
  )
}

export default Viewers
const Container=styled.div`
margin-top:30px;
display:grid;
grid-gap:30px;
margin:20px;
// padding:5px 0px 5px;
grid-template-columns:repeat(5,minmax(0,1fr));

`
const Wrap=styled.div`
border-radius:10px;
border-4px;
cursor:pointer;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezies(0.25,0.45, 0.45, 0.94) 0s;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
&:hover{
box-shadow :rgb(0 0 0 /80%) 0px 40px 58px -16px,
rgb(0 0 0 /72%) 0px 30px 22px -10px;
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
// transform:scale(0.5);
border-color:rgba(249,249,249,0.8)
}
`


