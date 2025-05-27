import styled from "styled-components";
import avatarImg from "../../../assets/images/avatar_1.webp"

export const Main = () => {


    return (
        <MainStyled>
            <AboutMe>
                <h1>Software Developer</h1>
                <h2>Hello, my name {"\n"} is Vahid Navazan</h2>
                <p>Short text with details about you, what you {"\n"}
                    do or your professional career. You can add{"\n"}
                    more information on the about page.</p>
                <WrappperButton>
                    <button>Projects</button>
                    <button>LinkedIn</button>
                </WrappperButton>
            </AboutMe>
            <Avatar>
                <img src={avatarImg} alt="avatar"/>
            </Avatar>
        </MainStyled>
    );
};


const MainStyled = styled.section`
    display: flex;
    gap: 50px;
    padding-left: 120px;
    justify-content: space-between;

    h1 {
        color: #fdc435;
    }




`

const AboutMe = styled.div`
    white-space: pre-line;
`

const Avatar = styled.div`

`

const WrappperButton = styled.div`
    display: flex;
    gap: 10px;

`
