import {FC} from "react";
import {Text} from "../../shared/ui/Text";
import {ProjectCard, ProjectI} from "../../entities/experience/ui/ProjectCard";
import SeasPayLogo from "../../entities/experience/assets/seaspay/logo.jpg"


export const Experience: FC = () => {
    const project: ProjectI = {
        id: 0,
        name: "SeasPay",
        description: "A payment system inside the Telegram messenger. User can specify the payment method and then make a worldwide transaction from sanctioned countries such as Russia.",
        stack: ["React + JS", "Python + FastAPI", "PostgreSQL", "DDD", "Clean Architecture"],
        tags: ["my startapp", "application", "telegram"],
        screenShots: [SeasPayLogo],
        githubUrl: "https://github.com/000x009/SeasPay-backend.git",
    }

    return (
        <section id="experience" className="flex flex-col p-25 bg-black text-white">
            <Text className="text-6xl mb-4">
                <span className="text-(--primary-color) text-shadow-(--text-shadow)">
                    EXP
                </span>erience
            </Text>
            <div className="flex flex-col">
                <ProjectCard project={project}/>
            </div>
        </section>
    )
}