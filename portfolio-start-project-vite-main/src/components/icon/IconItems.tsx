import styled from "styled-components";

type IconItemsPropsType = {
    width?:string
    height?:string
    img:string
    alt:string

}

export const IconItems = (props:IconItemsPropsType) => {
    return (
        <WrapperBox>
            <img src={props.img} alt={props.alt} width={props.width} height={props.height}/>
        </WrapperBox>
    );
};

const WrapperBox = styled.div `
    
`


