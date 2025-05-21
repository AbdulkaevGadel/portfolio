import styled from "styled-components";
import avatarImg from "../../../assets/images/avatar_1.webp"

export const Main = () => {
    return (
        <WrapperBox>
            <AboutMe>
                <h1>Software Developer</h1>
                <h2>Hello,  my name <br/> is Vahid Navazan</h2>
                <p>Short text with details about you, what you
                    do or your professional career. You can add
                    more information on the about page.</p>
                <WrappperButton>
                    <button>Projects</button>
                    <button>LinkedIn</button>
                </WrappperButton>
            </AboutMe>
            <Avatar>
                    <img src={avatarImg} alt="avatar"/>
            </Avatar>
        </WrapperBox>
    );
};


const WrapperBox = styled.div`
    display: flex;
    

`

const AboutMe = styled.div`

`

const Avatar = styled.div`

`

const WrappperButton = styled.div `
    display: flex;
    gap:10px;
    
`
