import styled, {css} from "styled-components";
import {StyledNavigationPropsType} from "../../types/types.ts";
import {theme} from "../../styles/theme/Theme.ts";
import {useState} from "react";

type BurgerButtonPropsType = {
    isOpen:boolean
}

export const NavigationMobile = () => {

    const  [isOpen,setOpen]=useState<boolean>(false)

    const isLIstOpened = ()=>{
        setOpen(!isOpen)
    }


    return (
        <StyledNavigation>
            <BurgerButton isOpen={isOpen} onClick={isLIstOpened}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={isOpen}>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href=""> Projects</a>
                </li>
                <li>
                    <a href=""> Contacts</a>
                </li>
            </ul>
            </MobileMenuPopup>
        </StyledNavigation>
    );
};


const StyledNavigation = styled.nav<StyledNavigationPropsType>`
    display: none;
    
    
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    line-height: 1.5;

    height: 42px;
    
    @media ${theme.media.mobile} {
        display: block;
    }
    
    
`

const BurgerButton = styled.button<BurgerButtonPropsType> `


    span {
        position: relative;
        display: block;
        width: 12px;
        height: 2px;
        background-color: ${theme.colors.fontPrimary};
        z-index: 99999;

        ${props => props.isOpen && css<BurgerButtonPropsType>`
            background-color: ${theme.colors.primaryBg};


        `}
        
        
        &:before {
            position: absolute;
            content: "";
            display: block;
            width: 12px;
            height: 2px;
            background-color: ${theme.colors.fontPrimary};
            transform: translateY(-4px);

            ${props => props.isOpen && css<BurgerButtonPropsType>`
                transform: rotate(-45deg) translateY(0);

            `}

        }

        &:after {
            position: absolute;
            content: "" ;
            display: block;
            width: 12px;
            height: 2px;
            background-color: ${theme.colors.fontPrimary};
            transform: translateY(4px);


            ${props => props.isOpen && css<BurgerButtonPropsType>`
                transform: rotate(45deg) translateY(0);

            `}

        }

    }

`

const MobileMenuPopup = styled.div<BurgerButtonPropsType> `
    position: fixed;
    top: 30%;
    left: 40%;
    bottom: 40%;
    z-index: 9999;
    background-color: rgba(253, 196, 53, 0);
    display: none;
    
    ${props => props.isOpen && css<BurgerButtonPropsType> `
       display: flex;
        justify-content: center;
        align-items: center;
        
        @media ${theme.media.mobile}{
            top: 101%;
            left: 70%;
        }
        
    `}
    
    ul {
        padding: 16px 0;
        
        @media ${theme.media.tablet} {
            
            background-color:${theme.colors.accent};
            
        }
        
    }
`
