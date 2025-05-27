import styled from "styled-components";
import {IconLink} from "../../components/icon/socialLink/IconLink.tsx";
import {IconSvg} from "../../components/icon/iconSvg/IconSVG.tsx";


export const Footer = () => {

    const socialContact = ["in", "instagram", "mail"]

    const socialElement = socialContact.map((s) => <IconLink iconId={s} width={"38"} height={"39"}
                                                             viewBox={"0 0 38 39"}/>)

    return (
        <FooterStyled>
            <ListOfSocial>
                {/*<SocialIcons>*/}
                    {socialElement}
                {/*</SocialIcons>*/}
            </ListOfSocial>
            <Copyright>Madelyn Torff 2021 </Copyright>
            <IconSvg iconId={"yellowWave"}  width={"100%"} height={"344"} viewBox={"0 0 1440 344"}/>
        </FooterStyled>
    );
};

// width="1440" height="344" viewBox="0 0 1440 344"

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ListOfSocial = styled.ul`
    display: flex;
    gap:30px;
`


// const SocialIcons = styled.li`
//
// `


const Copyright = styled.small`

`


