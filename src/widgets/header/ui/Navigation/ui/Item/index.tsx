import {FC, HTMLAttributes, ReactNode} from "react";
import styles from "./index.module.css";
import {cc} from "../../../../../../shared/lib/helpers/cc.ts";

interface IProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children: ReactNode;
    to: string;
}

export const Item: FC<IProps> = ({className, children, to, ...props}) => {
    return (
        <a href={to} className={cc(className, styles.item)} {...props}>
            {children}
        </a>
    );
};
