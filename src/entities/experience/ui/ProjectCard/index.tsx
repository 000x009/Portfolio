import {FC} from "react";
import {cc} from "../../../../shared/lib/helpers/cc.ts";
import {Text} from "../../../../shared/ui/Text";
import styles from "./index.module.css"
import {Image} from "../../../../shared/ui/Image";
import {Button} from "../../../../shared/ui/Button";
import {Tag} from "../Tag";

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
                "flex w-100 justify-between p-4 gap-20 overflow-hidden"
            )}
            {...rest}>
            <div className="flex flex-col gap-3 overflow-hidden">
                <div>
                    <Image className="w-96 h-96 object-cover rounded-xl" src={project.screenShots[0]}
                           alt={"project"}/>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-3">
                        <Text className="text-4xl">{project.name}</Text>
                        <Text className="text-2xl">{project.description}</Text>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 overflow-hidden flex-wrap">
                            {project.tags?.map((item, index) => <Tag key={index}>{item}</Tag>)}
                        </div>
                        <div className="flex gap-2 justify-between flex-wrap">
                            {project.websiteUrl && <Button className="w-full" component="a" href={project.websiteUrl}
                                                           target={"_blank"}>URL</Button>}
                            {project.githubUrl &&
                                <Button className="w-full" component="a" href={project.githubUrl} target={"_blank"}
                                        variant={'secondary'}>Github</Button>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}