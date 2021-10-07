import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="./images/logo.svg"/>
            <NavMenu>
                <a href="./">
                    <img src="./images/home-icon.svg" alt=""/>
                    <span>HOME</span>
                </a>
                <a href="./">
                    <img src="./images/search-icon.svg" alt=""/>
                    <span>SEARCH</span>
                </a>
                <a href="./">
                    <img src="./images/watchlist-icon.svg" alt=""/>
                    <span>WATCHLIST</span>
                </a>
                <a href="./">
                    <img src="./images/original-icon.svg" alt=""/>
                    <span>ORIGINALS</span>
                </a>
                <a href="./">
                    <img src="./images/movie-icon.svg" alt=""/>
                    <span>MOVIES</span>
                </a>
            </NavMenu>
            <UserImg src="./"/>
        </Nav>
    )
}
export default Header


const Nav =styled.nav`
   height: 70px;
   background: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
`

const Logo =styled.img`
   width: 80px;
`
const NavMenu =styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    
    a{
       display: flex;
       align-items: center;
       text-decoration: none;
       color: #fff;
       padding: 0 12px;

       img{
           height: 20px;
       }
       span{
           font-size: 13px;
           letter-spacing: 1.5px;
           position: relative;
           &:after{
               content: "";
               width: 100%;
               height: 2px;
               background: #fff;
               position: absolute;
               left:0;
               bottom: -6px;
               transform: scaleX(0);
               opacity:0;
               transition: all 250ms ease;
           }
       }

       &:hover{
         span:after{
            transform: scaleX(1);
            opacity:1;
        }
        }
    }
`

const UserImg = styled.img`
     height: 48px;
     width: 48px;
     border-raduis: 50%;
     cursor: pointer;
`