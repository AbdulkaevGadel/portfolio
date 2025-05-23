import styled from "styled-components";
import {Navigation} from "../../components/navigation/Navigation.tsx";
import {NameCandidate} from "./nameCandidate/NameCandidate.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <NameCandidate/>
            <Navigation/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 1440px;
    height: 56px;
`

