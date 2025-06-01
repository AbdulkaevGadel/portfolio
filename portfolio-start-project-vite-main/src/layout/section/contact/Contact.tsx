import {FlexWrapperSection} from "../../../components/wrappers/FlexWrapperSection.tsx";
import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import styled from "styled-components";
import {Container} from "../../../components/container/Container.tsx";

export const Contact = () => {
    return (
        <FlexWrapperSection marginB={"55px"}>
            <Container>
            <TitleSection title="Contact"/>
            <FormStyled>
                <Field/>
                <Field/>
                <Field as={"textarea"}/>
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
    gap: 24px;

    button {
        border-radius: 8px;
        padding: 8px 24px 8px 24px;
        width: 90px;
        height: 40px;
        margin: 0 auto;
    
    }


`
const Field = styled.input `

`


