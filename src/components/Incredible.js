import React from 'react'
import styled from 'styled-components'

function Incredible() {
  return (
    <Container>
      <Background> 
         <img src='/disney/incredibleback.jpeg'/>
    
      </Background>
          <ImgTitle>
      <img src='/disney/increaiblest.png'/>
      </ImgTitle>
      <Controls>
        <PlayButton>
<img src='/images/play-icon-black.png'></img>
<span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src='/images/play-icon-white.png'></img>
        <span>Trailer</span>
        </TrailerButton>
        <AddButton>
<span>+</span>
        </AddButton>
        <GroupWatchButton>
<img src='/images/group-icon.png'/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        <span>2018 .7m . Family.Fantasy.Kids Animation</span>
      </SubTitle>
      <Description>
        <span>
        A Chines mon who's sad when her grown son leaves home gets another<br></br>
        chance at motherhood when one of her dumplings springs to Life.but she<br></br>
        finds that nothing stays cute and small forever
        </span>
      </Description>
    </Container>
  )
}

export default Incredible
const Container=styled.div`
min-height:calc(100vh-70px);
// padding:0 calc(3.5vw + 5px);
position:relative;
// margin-left:20px;

`
const Background=styled.div`

position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}


`
const ImgTitle=styled.div`
margin-left:20px;
height:30vh;
min-height:170px;
width:35vh;
min-width:200px;
img{
  height:100%;
  width:100%;
  object-fit:contain;
}
`
const Controls=styled.div`
margin-left:20px;
display:flex;
align-items:center;
`
const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
padding:0 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
cursor:pointer;
span{
  color:black;
}
&:hover{
  background:rgb(198,198,198);
}

`
const TrailerButton=styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
span{
  color:white;
}


`
const AddButton=styled.button`
margin-right:16px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
span{
  font-size:30px;
  color:white;

}



`
const GroupWatchButton=styled(AddButton)`
background:rgb(0,0,0);

`
const SubTitle=styled.div`
margin-left:20px;
color:rgb(249,249,249);
font-size:15px
min-height:20px;
margin-top:26px;
letter-spacing:2px;

`
const Description=styled.div`
margin-left:20px;
color:rgb(249,249,249);
font-size:15px
min-height:20px;
margin-top:10px;
letter-spacing:2px;`
