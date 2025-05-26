import skillsSvg from "../../assets/svg/skillsSvg-sprite/skillsSvg.svg"
import styled from "styled-components";


type SkillPropsType = {
    iconID: string
}


export const Skills = (props: SkillPropsType) => {
    return (
        <SkillsStyled width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${skillsSvg}#${props.iconID}`}/>
        </SkillsStyled>
    );
};

const SkillsStyled = styled.svg `
    width: 16.6%;
    
`


