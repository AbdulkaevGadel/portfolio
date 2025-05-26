import styled from "styled-components";

type FlexWrapperPropsSType = {
    display?: string
    direction?: string
    wrap?: string
    flow?: string
    jContent?: string
    items?: string
    aContent?: string
    gap?: string
    aItems?: string
    jItems?: string

}


export const FlexWrapper = styled.section <FlexWrapperPropsSType>`
    display: flex;
    flex-direction: ${ props=>props.direction || "column"};
    align-items: ${ props=>props.aItems || "center"};
    justify-content: ${ props=>props.jContent || "center"};
    
`