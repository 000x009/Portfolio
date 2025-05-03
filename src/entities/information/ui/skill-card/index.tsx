import {FC} from "react";
import classNames from "classnames";
import {Text} from "../../../../shared/ui/Text";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const SkillCard: FC<Props> = ({className, children}) => {
    return (
        <Text
            className={classNames(className, "flex py-2 px-4 select-none")}>
            {children}
        </Text>
    )
}