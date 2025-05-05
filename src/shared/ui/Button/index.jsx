import {Text} from "../Text";
import styles from "./index.module.css";
import {cc} from "../../lib/helpers/cc.ts";

export const Button = ({
                           component = "button",
                           variant = "primary",
                           children,
                           className = null,
                           ...props
                       }) => {
    const Component = component

    return (
        <Component className={cc(className, styles.wrapper, styles[variant])} {...props}>
            {variant === "icon" ? (
                children
            ) : (
                <Text className={styles.text}>{children}</Text>
            )}
        </Component>
    );
};
