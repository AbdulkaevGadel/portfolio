import styled from "styled-components";
import {theme} from "../../styles/theme/Theme.ts";


type ProjectBlockPropsType = {
    nameProject: string
    description: Array<string>
    photo?: string
}

export const ProjectBlock = (props: ProjectBlockPropsType) => {
    return (
        <ProjectBlockStyled>
            <ImgStyled src={props.photo}/>
                <DescriptionStyled>
                    <h3>
                        {props.nameProject}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                    <button>View Project</button>
                </DescriptionStyled>
        </ProjectBlockStyled>
    );
};

const ProjectBlockStyled = styled.div`
    display: flex;
    background-color: #ffffff;
    margin-bottom: 80px;
    max-height: 525px;
    border-radius: 24px;
    overflow: hidden;
    max-width: 992px;
    justify-content: space-between;


    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    p {
        white-space: pre-line;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.colors.fontSecondary};

        @media (max-width: 1000px) {
            min-width: 282px;
        }
        
    }

    h3 {
        font-family: "Playfair Display", sans-serif;
        font-size: 40px;
        line-height: 1.5;
        color: ${theme.colors.fontPrimary};
    }

    button {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        border: 1px solid ${theme.colors.fontPrimary};
        border-radius: 24px;
        padding: 8px 24px;
        width: 150px;
        height: 43px;
        font-size: 17px;
        line-height: 1.5;
        min-width: 150px;
        min-height: 43px;
        background-color: white;
        color: ${theme.colors.fontPrimary};

        overflow: hidden;

        &:hover {
            background-color: ${theme.colors.accent};
            cursor: pointer;
        }

        &:active {
            background-color: white;
        }

    }

    @media (max-width: 1000px) {
        flex-direction: column;
        flex-wrap: wrap;

        max-width: 345px;
        max-height: none;

        &:nth-child(even) {
            flex-direction: column;
        }



`

const DescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    max-width: 496px;
    min-height: 520px;
    padding: 0 38px 0 50px;

    @media (max-width: 1000px) {
        min-width: 0;
        max-height: 282px;
        padding-left: 35px;
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
    }

`

const ImgStyled = styled.img`
    min-width: 496px;
    min-height: 520px;
    max-height: 525px;
    object-fit: cover;

    @media (max-width: 1000px) {
        max-width: 345px;
        min-width: 0;
    }


`
