import styled from "styled-components";

type TitleSectionPropsType ={
    title:string
}

export const TitleSection = (props:TitleSectionPropsType) => {
    return (
        <StyledTitleSection>
            <p>
                {props.title}
            </p>
        </StyledTitleSection>
    );
};

const StyledTitleSection = styled.div `
    display: flex;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
   
    p{
        margin: 0;
    }


`
