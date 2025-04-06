import { FC, ReactNode, HTMLAttributes } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

export const Item: FC<IProps> = ({ className, children, ...props }) => {
  return (
    <li className={classNames(className, styles.item)} {...props}>
      {children}
    </li>
  );
};
