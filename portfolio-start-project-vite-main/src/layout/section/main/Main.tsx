import styled from "styled-components";
import avatarImg from "../../../assets/images/avatar_1.webp"
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/theme/Theme.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";

export const Main = () => {


    return (
        <MainStyled>
            <Container displayF={"flex"} position={"relative"}>
                <WrapperReversStyled>
                    <FlexWrapper flex={"1"} display={"flex"} direction={"column"} jContent={"center"}>
                        <AboutMe>
                            <h1>SOFTWARE DEVELOPER</h1>
                            <h2>Hello, my name is Vahid Navazan</h2>
                            <p>Short text with details about you, what you
                                do or your professional career. You can add
                                more information on the about page.</p>
                        </AboutMe>
                        <WrappperButton>
                            <button>Projects</button>
                            <button>LinkedIn</button>
                        </WrappperButton>
                    </FlexWrapper>
                    <Avatar>
                        <img src={avatarImg} alt="avatar"/>
                    </Avatar>
                </WrapperReversStyled>
            </Container>
        </MainStyled>
    );
};


const MainStyled = styled.section`
    font-size: 20px;
    display: flex;
    gap: 50px;
    justify-content: center;
    padding-top: 111px;

    h1 {
        color: ${theme.colors.accent};
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
    }

    h2 {
        font-weight: 700;
        font-size: 64px;
        line-height: 1.2;
        color: #333;
        max-width: 508px;
        
        @media ${theme.media.mobile} {
            font-size: 42px;
        }
        
    }

    button {
        border-radius: 8px;
        padding: 8px 24px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        line-height: 1.5;
        background-color: ${theme.colors.accent};

        &:hover {
            background-color: white;
            cursor: pointer;
            border: 2px solid ${theme.colors.fontPrimary};
        }

        &:active {
            background-color: white;
        }
    }
    
    @media ${theme.media.tablet} {
        padding-top: 0;
    }
    
`

const WrapperReversStyled = styled.div `
    display: flex;
    max-width: 1230px;
    width: 100%;
    position: relative;
    
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column-reverse;
    }


`

const AboutMe = styled.div`
    white-space: pre-line;

    p {
        padding: 32px 0;
        max-width: 486px;
        font-size: 24px;
        line-height: 1.5;
        color: ${theme.colors.fontSecondary}
    }

`


const Avatar = styled.div`

    position: absolute;
    max-height: 720px;
    min-width: 630px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    top: -110px;
    border: 1px solid;
    right: 0;

    @media ${theme.media.tablet} {
        position: static;
        margin-bottom: 50px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 50px;
    }

    img {
        mask-image: url("../../../../public/yellow-bg.svg");
        mask-size: cover;
        mask-repeat: no-repeat;
        mask-position: left bottom;
        background-color: ${theme.colors.accent};

            // @media ${theme.media.tablet} {
        //     height: 486px;
        // }

    }




`

const WrappperButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

`
