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
    rGap?: string
    minH?: string
    flex?: string
    minW?: string
    maxW?: string

}


export const FlexWrapper = styled.div <FlexWrapperPropsSType>`
    display: flex;
    flex-direction: ${ props=>props.direction || undefined};
    align-items: ${ props=>props.aItems || undefined};
    justify-content: ${ props=>props.jContent || undefined};
    row-gap: ${props =>props.rGap};
    gap:${props =>props.gap};
    min-height: ${props =>props.minH || undefined};
    flex-grow: ${props =>props.flex || undefined};
    min-width: ${props =>props.minW || undefined};
    max-width: ${props =>props.minW || undefined};
`