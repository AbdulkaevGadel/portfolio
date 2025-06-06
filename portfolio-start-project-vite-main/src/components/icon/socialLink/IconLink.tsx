import styled from "styled-components";
import socialSvg from "../../../assets/svg/skillsSvg-sprite/svg-spite.svg";

type IconLinkPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const IconLink = (props: IconLinkPropsType) => {
    return (
        <IconLi>
        <IconLinkStyled href={"#"}>
            <IconItemsStyled  width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg">
                <use href={`${socialSvg}#${props.iconId}`}/>
            </IconItemsStyled>
        </IconLinkStyled>
        </IconLi>
    );
};

const IconLinkStyled = styled.a`
    cursor: pointer;
`
const IconItemsStyled = styled.svg `
    `
const IconLi = styled.li `
display: flex;
`