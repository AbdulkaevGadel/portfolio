import styled from "styled-components";

type FlexWrapperSectionPropsSType = {
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
    rGap?: string
    marginB?: string

}


export const FlexWrapperSection = styled.section <FlexWrapperSectionPropsSType>`
    display: flex;
    flex-direction: ${ props=>props.direction || "column"};
    align-items: ${ props=>props.aItems || "center"};
    justify-content: ${ props=>props.jContent || "center"};
    row-gap: ${props =>props.rGap};
    gap:${props =>props.gap};
    margin-bottom: ${props => props.marginB || "145px"} ;
    
    
`