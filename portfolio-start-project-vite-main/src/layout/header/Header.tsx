import styled from "styled-components";
import {Navigation} from "../../components/navigation/Navigation.tsx";
import {NameCandidate} from "./nameCandidate/NameCandidate.tsx";
import {Container} from "../../components/container/Container.tsx";
import {NavigationMobile} from "../../components/navigation/NavigationMobile.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container displayF={"flex"} jContent={"space-between"} aItems={"center"}>
                <NameCandidate/>
                <Navigation/>
                <NavigationMobile/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    max-height: 56px;
    z-index: 100;






`

