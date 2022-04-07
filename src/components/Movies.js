import React from "react";
import styled from "styled-components";

function Movies() {

  return (
    <Container>
      <h2>Recomended for you</h2>
      <Content>
        <Wrap>
        <a href="/detail">  <img src="/disney/bao.jpeg" /></a>
        </Wrap>
        <Wrap>
        <a href="/anti"> <img src="/disney/antie.jpeg" /></a> 
        
        </Wrap>
        <Wrap>
          <a href="/soul"> <img src="/disney/soul.jpeg" /></a> 
        </Wrap>
        <Wrap>
         <a href="/inside-out"> <img src="/disney/insideout.jpeg" /></a>
        </Wrap>
       
        
      </Content>
      <h2>New to Disney +</h2>
      <Content>
        <Wrap>
        <a href="/grafield">  <img src="/disney/grafield.jpeg" /></a>
        
        </Wrap>
        <Wrap>
          <a href="/raya">  <img src="/disney/raya.jpeg" /></a>
         
        </Wrap>
        <Wrap> 
          <a href="/legent">  <img src="/disney/legengs.jpeg" /></a>
          
  
        </Wrap>
        <Wrap>
          <a href="/simo">  <img src="/disney/simpomovie.jpeg" /></a>
          
    
        </Wrap>
      </Content>
      <h2>Originals</h2>
      <Content>
        <Wrap>
        <a href="/meano">  <img src="/disney/meanamovie.jpeg" /></a>
       
        </Wrap>
        <Wrap>
           <a href="/incredible">  <img src="/disney/incrediblesmovie.jpeg" /></a>
        </Wrap>
        <Wrap>
        <a href="/music">  <img src="/disney/mymusicstory.jpeg" /></a>
        </Wrap>
        <Wrap>
        <a href="/tangled">  <img src="/disney/tangledmovie.jpeg" /></a>
            </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div`
  margin: 20px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
