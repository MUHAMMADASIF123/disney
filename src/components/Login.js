import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTAOne src="/images/cta-logo-one.svg"></CTAOne>
        <CTAButton>GET ALL THERE</CTAButton>
        <Description>
          Get Premier Access to Raya snd the Last Dragon for an additional fee with a Disney + subcription
          AS of 25/03/2022 . the price of Disney + and Disney bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`

height:calc(100vh-70px);
// padding:0 calc(3.5vw +5px);
postion:relative;
color:white;
  &:before {
    background-position:top;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
background: url("/images/login-background.jpg");
content:"";
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
`;

const CTA = styled.div`
  width: 650px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
`;
const CTAOne = styled.img``;
const CTAButton = styled.a`
cursor:pointer;
width:100%;
height:50px;
align-items:center;
justify-content:center;
text-align:center;
line-height:42px;
background-color:blue;
letter-spacing:3px;
border-radius:5px;
&:hover{
  background-color:green;
}
`;
const Description=styled.p`
 font-size:11px;
 letter-spacing:1.5px;
 text-align:center;
 line-height:1.5;
`
const CTALogoTwo=styled.img`
width:650px;

`