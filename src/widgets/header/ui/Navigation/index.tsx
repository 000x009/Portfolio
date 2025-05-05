import {FC} from "react";
import styles from "./index.module.css";
import {Item} from "./ui/Item";
import {cc} from "../../../../shared/lib/helpers/cc.ts";

export interface INavItem {
    id: number;
    to: string;
    name: string;
}

interface IProps {
    className?: string;
    navElements: INavItem[];
}

export const Navigation: FC<IProps> = ({
                                           className,
                                           navElements,
                                           ...props
                                       }) => {
    return (
        <ol className={cc(className, styles.wrapper)} {...props}>
            {navElements.map((item) => (
                <Item key={item.id} to={item.to}>{item.name}</Item>
            ))}
        </ol>
    );
};
