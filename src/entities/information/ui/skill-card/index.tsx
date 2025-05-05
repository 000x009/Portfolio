import {FC} from "react";
import {Text} from "../../../../shared/ui/Text";
import {cc} from "../../../../shared/lib/helpers/cc.ts";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const SkillCard: FC<Props> = ({className, children}) => {
    return (
        <Text
            className={cc(className, "flex py-2 px-4 select-none")}>
            {children}
        </Text>
    )
}