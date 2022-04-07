import React from "react";
import styled from "styled-components";
// import  {useNavigate} from "react-router-dom";


// import Login from "./Login";
// import firebase from 'firebase'
// import {auth,provider} from '../firebase'
// import { useHistory } from "react-router-dom";
import { auth, provider } from '../firebase';
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin

} from '../features/User/UserSlice'
import {useDispatch,useSelector} from "react-redux"

function Header() {


  const dispatch=useDispatch();
  // const navigate = useNavigate();
const userName=useSelector(selectUserName);
const userEmail=useSelector(selectUserPhoto)


function Login() {
  
    auth.signInWithPopup(provider).then((result)=>{
      let user=result.user
      dispatch(setUserLogin({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
      }))
    });

}
  function signout(){
    auth.signOut().then(()=>{
      dispatch(setSignOut());
// navigate.push('/login');


    })
  }
  return (
    <Navbar>
      <Logo src="images/logo.svg" />
      {
        !userName ? (
          <LoginContainer><LoginBtn onClick={Login}>login</LoginBtn></LoginContainer>
        ):
        <>
          <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" />
          <span>MOVIE</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg
      onClick={signout} src="/images/custom-user.jpg"/>
        </>
              }
    
    </Navbar>
  );
}

export default Header;
const Navbar = styled.div`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  padding: 8 36px;
`;
const Logo = styled.img`
  width: 80px;
  margin-left: 20px;
`;
const NavMenu = styled.div`
  margin-left: 5px;
  display: flex;
 flex:1;
 margin-left:5px;

 align-items:center;
  
  a  {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    

    img {
      height: 25px;
      span {
        font-size: 13px;
        letter-spacing: 1.42px;
      }
     
    }
  }
  a:hover{
    border-bottom:2px solid white;
    // transform:scaleY(0.75)
  }
`;
const UserImg=styled.img`
height:40px;
width:40px;
border-radius:20px;
cursor:pointer;
margin-right:10px;
`
const LoginBtn=styled.div`
color:white;
border-radius: 4px;
border:1px solid white;
padding:8px 10px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0,0.6);
transition:all 0.2 ease 0s;
cursor:pointer;
&:hover{
  background-color:green;
  color:white;
  border-color:white;

}

`
const LoginContainer=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
margin-right:5px;
`