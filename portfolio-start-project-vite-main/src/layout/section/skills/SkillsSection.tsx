import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import {FlexWrapperSection} from "../../../components/wrappers/FlexWrapperSection.tsx";
import {Skills} from "../../../components/skills/Skills.tsx";
import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/theme/Theme.ts";

export const SkillsSection = () => {

    const skillsSvg:string[] = ["greensock","github","css","html","js","bootstrap","git","react","sass","redux","tailwind","vscode"]

    const skillsElement = skillsSvg.map((s) => <Skills iconID={s} />)

    const titleProps: string = "Skills"

    return (
        <FlexWrapperSection gap={"74px"} >
            <Container>
            <TitleSection title={titleProps}/>
            <SkillsSectionStyled>
            {skillsElement}
            </SkillsSectionStyled>
            </Container>
        </FlexWrapperSection>
    );
};

const SkillsSectionStyled = styled.div`
    //display: flex;
    //flex-wrap: wrap;
    //justify-content: space-between;
    //flex-direction: row;
    //max-width: 1200px;
    //row-gap: 75px;

    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 75px;
    width: 100%;
    justify-content: space-between;
    justify-items: center;


    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    

        // @media ${theme.media.tablet} {
    //     justify-content: flex-start;
    //    
    // }
    //
        // @media ${theme.media.mobile} {
    //
    //     justify-content: space-between;
    //    
    // }

`
//
// const WrapperSkills = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 1200px;
//
// `



