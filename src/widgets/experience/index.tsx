import {FC} from "react";
import {Text} from "../../shared/ui/Text";
import {ProjectCard, ProjectI} from "../../entities/experience/ui/ProjectCard";
import SeasPayLogo from "../../entities/experience/assets/seaspay/logo.jpg"
import ParadoxLogo from "../../entities/experience/assets/seaspay/paradox.jpg"
import ResumeLogo from "../../entities/experience/assets/seaspay/resume.svg"
import ClubLogo from "../../entities/experience/assets/seaspay/009club.png"
import {cc} from "../../shared/lib/helpers/cc.ts";
import styles from "./index.module.css"

const projects: ProjectI[] = [
    {
        id: 0,
        name: "SeasPay",
        description: "A payment system inside the Telegram messenger. User can specify the payment method and then make a worldwide transaction from sanctioned countries such as Russia.",
        stack: ["React + JS", "Python + FastAPI", "PostgreSQL", "DDD", "Clean Architecture"],
        tags: ["my startapp", "webapplication", "telegram"],
        screenShots: [SeasPayLogo],
        githubUrl: "https://github.com/000x009/SeasPay-backend.git",
    },
    {
        id: 1,
        name: "Paradox Shop",
        description: "A telegram bot, where you can purchase inside the game products in such mobile games as Brawl Stars, Clash of Clans, etc.",
        stack: ["React + JS", "Python + FastAPI", "PostgreSQL", "DDD", "Clean Architecture"],
        tags: ["freelance", "webapplication", "telegram"],
        screenShots: [ParadoxLogo],
        websiteUrl: "https://t.me/paradoxshopbot"
    },
    {
        id: 3,
        name: "Resume",
        description: "This website, that you are currently watching at.",
        stack: ["React + JS", "Python + FastAPI", "PostgreSQL", "DDD", "Clean Architecture"],
        tags: ["resume"],
        screenShots: [ResumeLogo],
        websiteUrl: "https://m.shesterov.dev",
        githubUrl: "https://github.com/000x009/Portfolio.git",
    },
    {
        id: 4,
        name: "009club",
        description: "A payment system inside the Telegram messenger. User can specify the payment method and then make a worldwide transaction from sanctioned countries such as Russia.",
        stack: ["React + JS", "Python + FastAPI", "PostgreSQL", "DDD", "Clean Architecture"],
        tags: ["my startapp"],
        screenShots: [ClubLogo],
        githubUrl: "https://github.com/000x009/009club-frontend.git",
        websiteUrl: "https://009club.com"
    },
]


export const Experience: FC = () => {
    return (
        <section id="experience" className={cc(styles.wrapper, "flex flex-col p-25 bg-black text-white")}>
            <Text className="text-6xl mb-4">
                <span className="text-(--primary-color) text-shadow-(--text-shadow)">
                    EXP
                </span>erience
            </Text>
            <div className="flex gap-8 flex-wrap align-middle justify-center">
                {projects.map((item) => <ProjectCard className="transition-[0.25s] hover:transform-[scale(1.025)]"
                                                     project={item}/>)}
            </div>
        </section>
    )
}