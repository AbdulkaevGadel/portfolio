import styled from "styled-components";


type ProjectBlockPropsType = {
    nameProject:string
    description: [string]
    photo?: string
}

export const ProjectBlock = (props:ProjectBlockPropsType) => {
    return (
        <WrapperBoxStyled>
            <div>
            <h4>
                {props.nameProject}
            </h4>
            <p>
                {props.description.join("\n")}
            </p>
            <button>View Project</button>
            </div>
            <ImgStyled src={props.photo}/>
        </WrapperBoxStyled>
    );
};

const WrapperBoxStyled = styled.div `
    display: flex;
    p {
        white-space: pre-line
    }

`

const ImgStyled =styled.img `
    width: 490px;
    height: 520;
`
