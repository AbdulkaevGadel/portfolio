import socialSvg from "../../../assets/svg/skillsSvg-sprite/svg-spite.svg";
import styled from "styled-components";
import {theme} from "../../../styles/theme/Theme.ts";

type IconLinkPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconSvg = (props:IconLinkPropsType) => {
    return (
        <IconStyled width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <use href={`${socialSvg}#${props.iconId}`}/>
        </IconStyled>
    );
};

const IconStyled = styled.svg `

    position: absolute;
    top:-10px;
    
    
    @media screen and (max-width: 1000px) {
        position: static;
        height: 250px;
    }
    @media screen and (max-width: 900px) {
        height: 100px;
    }
    
    
    
    @media ${theme.media.mobile} {
        height: 98px;
        position: static;
    }
`
