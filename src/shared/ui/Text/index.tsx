import {FC, HTMLAttributes} from "react";
import styles from "./index.module.css";
import {cc} from "../../lib/helpers/cc.ts";

interface Props extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "base" | "button" | "description";
    component?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
    color?: "blue" | "dark" | "white" | "gray";
    isStableColor?: boolean;
}

export const Text: FC<Props> = ({
                                    variant = "base",
                                    component = "span",
                                    className,
                                    children,
                                    ...props
                                }) => {
    const Component = component;

    return (
        <Component
            {...props}
            className={cc(className, styles.text, styles[variant])}
        >
            {children}
        </Component>
    );
};
