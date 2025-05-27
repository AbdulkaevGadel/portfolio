import socialSvg from "../../../assets/svg/skillsSvg-sprite/svg-spite.svg";
import styled from "styled-components";

type IconLinkPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconSvg = (props:IconLinkPropsType) => {
    return (
        <IconStyled width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href={`${socialSvg}#${props.iconId}`}/>
        </IconStyled>
    );
};

const IconStyled = styled.svg `
    object-fit: cover;
`
