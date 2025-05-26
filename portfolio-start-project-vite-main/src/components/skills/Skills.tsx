import skillsSvg from "../../assets/svg/skillsSvg-sprite/skillsSvg.svg"


type SkillPropsType = {
    iconID: string
}


export const Skills = (props: SkillPropsType) => {
    return (
        <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${skillsSvg}#${props.iconID}`}/>
        </svg>
    );
};


