import styled from "styled-components";
import {FlexWrapper} from "../wrappers/FlexWrapper.tsx";


type ProjectBlockPropsType = {
    nameProject:string
    description: Array<string>
    photo?: string
}

export const ProjectBlock = (props:ProjectBlockPropsType) => {
    return (
        <ProjectBlockStyled>
            <FlexWrapper aItems={"none"}>
            <h3>
                {props.nameProject}
            </h3>
            <p>
                {props.description.join("\n")}
            </p>
            <button>View Project</button>
            </FlexWrapper>
            <ImgStyled src={props.photo}/>
        </ProjectBlockStyled>
    );
};

const ProjectBlockStyled = styled.div `
    display: flex;
    background-color: #ffffff;
    margin-bottom: 80px;
    p {
        white-space: pre-line
    }

`

const ImgStyled =styled.img `
    width: 490px;
    height: 520;
`
