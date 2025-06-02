import styled from "styled-components";
import avatarImg from "../../../assets/images/avatar_1.webp"
import {Container} from "../../../components/container/Container.tsx";
import {theme} from "../../../styles/theme/Theme.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";

export const Main = () => {


    return (
        <MainStyled>
            <Container displayF={"flex"} position={"relative"} >
                <FlexWrapper minH={"370px"} flex={"1"} display={"flex"} direction={"column"} jContent={"center"} >
                <AboutMe>
                    <h1>SOFTWARE DEVELOPER</h1>
                    <h2>Hello, my name {"\n"} is Vahid Navazan</h2>
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
            </Container>
        </MainStyled>
    );
};


const MainStyled = styled.section`
    font-size: 20px;
    display: flex;
    gap: 50px;
    justify-content: space-between;

    h1 {
        color: ${theme.colors.accent};
        margin-bottom: 12px;
        font-size: 20px;
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




`

const AboutMe = styled.div`
    white-space: pre-line;
    
    p{
        padding: 32px 0;
        max-width: 486px;
        font-size: 24px;
        line-height: 1.5;
        color: ${theme.colors.fontSecondary}
    }
    
`


const Avatar = styled.div`
    max-height: 720px;
    max-width: 630px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    top: 0;
    

`

const WrappperButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

`
