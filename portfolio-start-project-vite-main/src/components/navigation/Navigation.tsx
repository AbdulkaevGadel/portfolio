import styled from "styled-components";

type StyledNavigationPropsType = {
    alignI?: string
    justifyC?: string
    direction?: string
    gap?: string

}

export const Navigation = () => {
    return (
        <StyledNavigation gap={"48px"}>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href=""> Projects</a>
                </li>
                <li>
                    <a href=""> Contacts</a>
                </li>
            </ul>
        </StyledNavigation>
    );
};


const StyledNavigation = styled.nav<StyledNavigationPropsType>`

    font-family: "Raleway", sans-serif;
    font-size: 18px;
    line-height: 1.5;
    
    ul {
        display: flex;
        align-items: ${props => props.alignI || "flex-start"};
        justify-content: ${props => props.justifyC || "flex-start"};
        flex-direction: ${props => props.direction || "row"};
        gap: ${props=>props.gap || "0"};
        padding: 14px 0;
    }
`
