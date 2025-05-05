import {FC} from "react";
import {Text} from "../../shared/ui/Text";
import {InformationCard} from "../../entities/information/ui/card";
import {
    aboutMe,
    programmingLanguages,
    programmingTools,
    spokenLanguages
} from "../../entities/information/const/information";
import styles from "./index.module.css"
import {SkillCard} from "../../entities/information/ui/skill-card";
import {Image} from "../../shared/ui/Image";
import UserPicture from "../../shared/assets/userpic.jpg"
import NoSmokingIcon from "../../shared/assets/nosmoking.png"
import EuropeFlag from "../../shared/assets/europenianflag.png"
import classNames from "classnames";

export const InformationWidgets: FC = () => {
    const lyfestyleImages = [
        NoSmokingIcon,
        EuropeFlag
    ]

    return (
        <section id="about" className="p-25 flex flex-wrap justify-center gap-6">
            <InformationCard title="about me" className={styles.about}>
                <div className="flex gap-4">
                    <Image className="object-cover h-40 w-40" src={UserPicture} alt={"userpic"}/>
                    <div className="flex flex-col gap-3">
                        <Text>{aboutMe}</Text>
                        <div className="flex gap-4">
                            {lyfestyleImages.map((item, index) => (
                                <Image
                                    key={index}
                                    className="w-12 h-12 rounded-full object-cover bg-white transition-[all 0.25s ease-in-out] hover:transform-[scale(1.05)]"
                                    src={item} alt="lyfestyle"/>
                            ))}
                        </div>
                    </div>

                </div>
            </InformationCard>

            <InformationCard title="core skills">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        {programmingLanguages.map((item, index) => (
                            <SkillCard className="bg-white text-black hover:transform-[rotate(12deg)]"
                                       key={index}>{item}</SkillCard>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        {spokenLanguages.map((item) => (
                            <SkillCard className={classNames(styles.spokenLanguage, "hover:transform-[rotate(-12deg)]")}
                                       key={item.id}>{item.language}<span
                                className="text-(--primary-color)">::</span>{item.level}
                            </SkillCard>
                        ))}
                    </div>

                    <div className="flex gap-[1px]">
                        {programmingTools.map((item, index) => (
                            <SkillCard className={classNames("text-(--primary-color) hover:transform-[scaleX(1.5)]")}
                                       key={index}>
                                {item}
                            </SkillCard>
                        ))}
                    </div>
                </div>
            </InformationCard>
        </section>
    );
};
