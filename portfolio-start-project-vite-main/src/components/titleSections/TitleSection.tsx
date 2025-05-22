import styled from "styled-components";

type TitleSectionPropsType ={
    title:string
}

export const TitleSection = (props:TitleSectionPropsType) => {
    return (
        <StyledTitleSection>
            <h3>
                {props.title}
            </h3>
        </StyledTitleSection>
    );
};

const StyledTitleSection = styled.section `
    display: flex;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;


`
