import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import {FlexWrapper} from "../../../components/wrapperbox/FlexWrapper.tsx";
import {Skills} from "../../../components/skills/Skills.tsx";
import styled from "styled-components";

export const SkillsSection = () => {

    const skillsSvg:string[] = ["greensock","github","css","html","js","bootstrap","git","react","sass","redux","tailwind","vscode"]

    const skillsElement = skillsSvg.map((s) => <Skills iconID={s} />)

    const titleProps: string = "Skills"

    return (
        <FlexWrapper>
            <TitleSection title={titleProps}/>
            <WrapperBlockSkills>
            {skillsElement}
            </WrapperBlockSkills>
        </FlexWrapper>
    );
};


// const WrapperBox = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const WrapperBlockSkills = styled.div`
    display: flex;
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

//     <Test>
//     <TitleSection title={titleProps}/>
// <WrapperBlockSkills>
//     <IconItems img={vsCodeSvg} alt="VsCode"/>
//     <IconItems img={jsSvg} alt="JS"/>
//     <IconItems img={htmlSvg} alt="HTML"/>
//     <IconItems img={cssSvg} alt="CSS"/>
//     <IconItems img={greensockSvg} alt="Greensock"/>
//     <IconItems img={reduxSvg} alt="Redux"/>
// </WrapperBlockSkills>
// <WrapperBlockSkills>
//     <IconItems img={gitHubSvg} alt="GitHub"/>
//     <IconItems img={gitSvg} alt="GIT"/>
//     <IconItems img={reactSvg} alt="React"/>
//     <IconItems img={sassSvg} alt="Sass"/>
//     <IconItems img={bootstrapSvg} alt="Bootstrap"/>
//     <IconItems img={tailwindSvg} alt="Tailwind"/>
// </WrapperBlockSkills>
// </Test>


