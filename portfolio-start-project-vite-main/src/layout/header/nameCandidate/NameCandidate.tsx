import styled from "styled-components";
import {theme} from "../../../styles/theme/Theme.ts";

export const NameCandidate = () => {
    return (
        <StyledNameCandidate>
            <a href="">Vahid Navazan</a>
        </StyledNameCandidate>
    );
};


const StyledNameCandidate = styled.div`
    font-family: "Comfortaa", sans-serif;
    font-size: 18px;
    line-height: 1.8;
    padding: 12px 0;
    
    @media ${theme.media.tablet} {
        margin-right: 108px;
        
    }
    
    
`
