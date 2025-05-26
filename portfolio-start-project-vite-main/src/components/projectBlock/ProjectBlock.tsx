import styled from "styled-components";


type ProjectBlockPropsType = {
    nameProject:string
    description: Array<string>
    photo?: string
}

export const ProjectBlock = (props:ProjectBlockPropsType) => {
    return (
        <ProjectBlockStyled>
            <div>
            <h3>
                {props.nameProject}
            </h3>
            <p>
                {props.description.join("\n")}
            </p>
            <button>View Project</button>
            </div>
            <ImgStyled src={props.photo}/>
        </ProjectBlockStyled>
    );
};

const ProjectBlockStyled = styled.div `
    display: flex;
    p {
        white-space: pre-line
    }

`

const ImgStyled =styled.img `
    width: 490px;
    height: 520;
`
