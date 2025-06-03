import {FlexWrapperSection} from "../../../components/wrappers/FlexWrapperSection.tsx";
import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/theme/Theme.ts";

export const Contact = () => {
    return (
        <FlexWrapperSection marginB={"0"}>
            <Container displayF={"flex"} direction={"column"} rGap={"wrap"} aItems={"center"}>
            <TitleSection title="Contact"/>
                <FormStyled>
                    <label htmlFor="name">Name</label>
                    <Field id="name"/>
                    <label htmlFor="email">Email</label>
                    <Field id="email"/>
                    <label htmlFor="message">Message</label>
                    <Field as={"textarea"} id = "message"/>
                    <button type={"submit"}>Send</button>
                </FormStyled>
            </Container>
        </FlexWrapperSection>
    );
};

const FormStyled = styled.form `
    display: flex;
    max-width: 500px;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 125px;
    
    position: relative;

    button {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.5;
        color:${theme.colors.fontPrimary};
        border-radius: 8px;
        padding: 8px 24px 8px 24px;
        width: 90px;
        height: 40px;
        margin: 0 auto;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 82%;
        top: 100%;
        
        @media (max-width: 512px) {
            position: absolute;
            left: 74%;
            top: 100%;
        }
    
    }
    
    //textarea {
    //    
    //}


`
const Field = styled.input `

`


