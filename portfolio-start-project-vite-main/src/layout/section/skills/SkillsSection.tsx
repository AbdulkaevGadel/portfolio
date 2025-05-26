import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import {FlexWrapper} from "../../../components/wrapperbox/FlexWrapper.tsx";
import {Skills} from "../../../components/skills/Skills.tsx";
import styled from "styled-components";

export const SkillsSection = () => {

    const skillsSvg:string[] = ["greensock","github","css","html","js","bootstrap","git","react","sass","redux","tailwind","vscode"]

    const skillsElement = skillsSvg.map((s) => <Skills iconID={s} />)

    const titleProps: string = "Skills"

    return (
        <FlexWrapper gap={"74px"} >
            <TitleSection title={titleProps}/>
            <SkillsSectionStyled>
            {skillsElement}
            </SkillsSectionStyled>
        </FlexWrapper>
    );
};

const SkillsSectionStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
`
//
// const WrapperSkills = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 1200px;
//
// `



