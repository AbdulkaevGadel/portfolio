import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import {ProjectBlock} from "../../../components/projectBlock/ProjectBlock.tsx";
import yogaPhoto from "../../../assets/images/projectWomenYoga_1.webp"
import calendarPhoto from "../../../assets/images/calendar_1.webp"
import mobilePhoto from "../../../assets/images/mobile_1.webp"
import {FlexWrapperSection} from "../../../components/wrappers/FlexWrapperSection.tsx";
import {Container} from "../../../components/container/Container.tsx";


export const ProjectSection = () => {

    const state = {
        project1:{
            nameProject: "Yoga Site",
            description:["I created this personal project in order to show\n" +
            "how to create an interface in Figma using a\n" +
            "portfolio as an example."],
            photo:yogaPhoto,
        },
        project2:{
            nameProject: "Calendar Site",
            description:["What was your role, your deliverables, if the\n" +
            " project was personal, freelancing."],
            photo:calendarPhoto,
        },
        project3:{
            nameProject: "Mobile Site",
            description:["You can also add in this description the type of the\n" +
            "project, if it was for web, mobile, electron."],
            photo:mobilePhoto,
        },

    }



    return (
        <FlexWrapperSection gap={"80px"}>
            <Container>
            <TitleSection title={"Projects"}/>
            <ProjectBlock nameProject={state.project1.nameProject} description={state.project1.description} photo={state.project1.photo}/>
            <ProjectBlock nameProject={state.project2.nameProject} description={state.project2.description} photo={state.project2.photo}/>
            <ProjectBlock nameProject={state.project3.nameProject} description={state.project3.description} photo={state.project3.photo}/>
            </Container>
        </FlexWrapperSection>
    );
};


