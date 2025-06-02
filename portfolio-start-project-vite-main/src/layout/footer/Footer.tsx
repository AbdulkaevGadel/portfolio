import styled from "styled-components";
import {IconLink} from "../../components/icon/socialLink/IconLink.tsx";
import {IconSvg} from "../../components/icon/iconSvg/IconSVG.tsx";
import {Container} from "../../components/container/Container.tsx";
import {theme} from "../../styles/theme/Theme.ts";


export const Footer = () => {

    const socialContact = [ "instagram","in", "mail"]

    const socialElement = socialContact.map((s) => <IconLink iconId={s} width={"40"} height={"40"}/>)

    return (
        <FooterStyled>
            <Container displayF={"flex"} direction={"column"} aItems={"center"}>
            <ListOfSocial>
                    {socialElement}
            </ListOfSocial>
            <Copyright>Madelyn Torff 2021 </Copyright>
            </Container>
            <IconSvg iconId={"yellowWave"}  width={"100%"} height={"344"} viewBox={"0 0 1440 344"}/>
        </FooterStyled>
    );
};


const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
        margin-bottom:0;
    }
    
`

const ListOfSocial = styled.ul`
    display: flex;
    gap:25px;
    margin-bottom: 30px;
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontSecondary};
`


