import styled from "styled-components";
import {Navigation} from "../../components/navigation/Navigation.tsx";
import {NameCandidate} from "./nameCandidate/NameCandidate.tsx";
import {Container} from "../../components/container/Container.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container displayF={"flex"} jContent={"space-between"}>
            <NameCandidate/>
            <Navigation/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    //padding: 12px 120px;
    height: 56px;
    
`

