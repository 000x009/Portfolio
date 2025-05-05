import {FC} from "react";
import {cc} from "../../../../shared/lib/helpers/cc.ts";
import {Text} from "../../../../shared/ui/Text";
import styles from "./index.module.css"
import {Image} from "../../../../shared/ui/Image";
import {Tag} from "../Tag";
import {Button} from "../../../../shared/ui/Button";

export interface ProjectI {
    id: number;
    name: string;
    description?: string
    stack: string[]
    tags?: string[]
    screenShots: string[],
    websiteUrl?: string,
    githubUrl?: string
}

interface Props {
    className?: string
    project: ProjectI
}

export const ProjectCard: FC<Props> = ({className, project, ...rest}) => {
    return (
        <div
            className={cc(
                className,
                styles.wrapper,
                "flex w-full justify-between p-4 gap-20"
            )}
            {...rest}>
            <div className="flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-3">
                    <Text className="text-4xl">{project.name}</Text>
                    <Text className="text-2xl">{project.description}</Text>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        {project.tags?.map((item, index) => <Tag key={index}>{item}</Tag>)}
                    </div>
                    <div className="flex gap-2">
                        <Button component="a" href={project.websiteUrl} target={"_blank"}>Website</Button>
                        <Button component="a" href={project.githubUrl} target={"_blank"}
                                variant={'secondary'}>Github</Button>
                    </div>
                </div>
            </div>
            <div>
                <Image className="w-96 h-96 object-cover rounded-xl" src={project.screenShots[0]} alt={"project"}/>
            </div>
        </div>
    )
}