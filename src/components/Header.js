import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import rc from '../images/rc.png'
import background from '../images/background-header.png'

export default function Header() {

    const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    `

    const Header = styled.header`
        width: 100%;
        height: 150vh;
        background-image: url(${background});
        background-size: 98% 146vh;
        background-repeat: no-repeat;
        background-position: center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    `

    const NavBox = styled.div`
        width: 98%;
        height: 20vh;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding: 0 25px;

        nav{
            width: 50vw;
            height: 100%;
        }

        img{
            width: 60px;
            height: 60px;
        }
    `

    const Navigation = styled.ul`
        display: flex;
        list-style: none;
        font-size: 3vh;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        align-items: center;
        color: #373737;

        li{
            width: 10vw;
            height: 7vh;
            display:flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            
            &:hover{
                font-weight: bold;
                border: 3px solid #373737;
            }
        }
    `

    const TitleBox = styled.div`
        height: 130vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 6vh;
        color: #373737;
    `

    return (
        <Header>
            <GlobalStyle />
            <NavBox>
                <img src={rc} />

                <nav>
                    <Navigation>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </Navigation>
                </nav>
            </NavBox>
            <TitleBox>
                <h1>RECIPES</h1>
            </TitleBox>
        </Header>
    )
}