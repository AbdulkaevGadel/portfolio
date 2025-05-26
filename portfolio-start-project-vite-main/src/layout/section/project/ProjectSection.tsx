import {TitleSection} from "../../../components/titleDiv/TitleSection.tsx";
import {ProjectBlock} from "../../../components/projectBlock/ProjectBlock.tsx";
import yogaPhoto from "../../../assets/images/projectWomen_1.webp"
import {FlexWrapper} from "../../../components/wrapperbox/FlexWrapper.tsx";


export const ProjectSection = () => {

    const nameProject: string = "Yoga Site"
    const description =
        "I created this personal project in order to show\n" +
        "how to create an interface in Figma using a\n" +
        "portfolio as an example.";

    return (
        <FlexWrapper gap={"80px"}>
            <TitleSection title={"Projects"}/>
            <ProjectBlock nameProject={nameProject} description={[description]} photo={yogaPhoto}/>
        </FlexWrapper>
    );
};


