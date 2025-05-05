import {Text} from "../../../../shared/ui/Text";
import {cc} from "../../../../shared/lib/helpers/cc.ts";
import styles from "./index.module.css"

interface Props {
    children?: React.ReactNode
    className?: string
}

export const Tag: React.FC<Props> = ({className, children, ...rest}) => {
    return (
        <Text {...rest} className={
            cc(
                className,
                styles.wrapper,
                "flex w-fit px-2 py-1 text-[1rem] rounded-full"
            )
        }>
            {children}
        </Text>
    )
}