import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {ProjectSection} from "./layout/section/project/ProjectSection.tsx";
import {SkillsSection} from "./layout/section/skills/SkillsSection.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <SkillsSection/>
            <ProjectSection/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
