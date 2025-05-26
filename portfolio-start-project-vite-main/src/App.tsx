import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {ProjectSection} from "./layout/section/project/ProjectSection.tsx";
import {SkillsSection} from "./layout/section/skills/SkillsSection.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <SkillsSection/>
            <ProjectSection/>
            <Contact/>
        </div>
    )
}

export default App
