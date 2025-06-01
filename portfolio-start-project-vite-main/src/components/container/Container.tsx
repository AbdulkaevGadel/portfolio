import styled from "styled-components";


type ContainerPropsType = {
    maxW?: string
    width?: string
    minH?: string
    padding?: string
    margin?: string
    border?: string
    displayF?: string
    direction?: string
    wrap?: string
    flow?: string
    jContent?: string
    items?: string
    aContent?: string
    gap?: string
    aItems?: string
    jItems?: string
    rGap?: string
    position?: string

}


 export const Container = styled.div<ContainerPropsType> `

     max-width: ${props => props.maxW || "1230px"};
     width: 100%;
     min-height: 100%;
     padding: ${props => props.padding || "0 15px"};
     margin: 0 auto;
     outline: 1px solid red;
     display: ${props => props.displayF || undefined};
     flex-direction: ${props => props.direction || undefined};
     justify-content: ${props => props.jContent || undefined};
     position: ${props => props.position || undefined};

 `