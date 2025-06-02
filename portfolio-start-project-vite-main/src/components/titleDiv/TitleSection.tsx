import styled from "styled-components";
import {theme} from "../../styles/theme/Theme.ts";

type TitleSectionPropsType ={
    title:string
}


export const TitleSection = (props:TitleSectionPropsType) => {
    return (
        <StyledTitleSection>
            <p>
                {props.title}
            </p>
        </StyledTitleSection>
    );
};

const StyledTitleSection = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;

    
   
    p{
        font-size: 48px;
        line-height: 1.5;
        text-align: center;
        color: ${theme.colors.fontPrimary};
        font-family: "Playfair Display", sans-serif;
        
        position: relative;
        
        
        &:before {
            content: "";
            display: inline-block;
            border-radius: 2px;
            width: 100px;
            height: 4px;
            background-color: ${theme.colors.accent};
            
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            bottom: -4px;
        }
      
    }


`
