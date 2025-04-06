import { FC } from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { Item } from "./ui/Item";

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
    <ol className={classNames(className, styles.wrapper)} {...props}>
      {navElements.map((item) => (
        <Item>{item.name}</Item>
      ))}
    </ol>
  );
};
