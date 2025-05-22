import styled from "styled-components";
import {TitleSection} from "../../components/titleSections/TitleSection.tsx";
import vsCodeSvg from "../../assets/svg/skills/vscode.svg"
import jsSvg from "../../assets/svg/skills/js.svg"
import htmlSvg from "../../assets/svg/skills/html.svg"
import cssSvg from "../../assets/svg/skills/css.svg"
import greensockSvg from "../../assets/svg/skills/cib_greensock.svg"
import reduxSvg from "../../assets/svg/skills/redux.svg"
import gitHubSvg from "../../assets/svg/skills/github.svg"
import gitSvg from "../../assets/svg/skills/logos_git-icon.svg"
import reactSvg from "../../assets/svg/skills/logos_react.svg"
import sassSvg from "../../assets/svg/skills/logos_sass.svg"
import bootstrapSvg from "../../assets/svg/skills/logos_bootstrap.svg"
import tailwindSvg from "../../assets/svg/skills/tailwind.svg"

export const Skills = () => {

    const titleProps: string = "Skills"

    return (
        <WrapperBox>
            <TitleSection title={titleProps}/>
            <WrapperSkills>
                <img src={vsCodeSvg} alt="VsCode"/>
                <img src={jsSvg} alt="JS"/>
                <img src={htmlSvg} alt="HTML"/>
                <img src={cssSvg} alt="CSS"/>
                <img src={greensockSvg} alt="Greensock"/>
                <img src={reduxSvg} alt="Redux"/>
            </WrapperSkills>
            <WrapperSkills>
                <img src={gitHubSvg} alt="GitHub"/>
                <img src={gitSvg} alt="GIT"/>
                <img src={reactSvg} alt="React"/>
                <img src={sassSvg} alt="Sass"/>
                <img src={bootstrapSvg} alt="Bootstrap"/>
                <img src={tailwindSvg} alt="Tailwind"/>
            </WrapperSkills>
        </WrapperBox>
    );
};


const WrapperBox = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 74px;
    flex-direction: column;
`

const WrapperSkills = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
`
