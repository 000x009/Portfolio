import classNames from "classnames";
import { Text } from "../Text";
import { FC, ReactNode, HTMLAttributes } from "react";
import styles from "./index.module.css";

interface IProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  children: ReactNode;
  component?: "button" | "a";
  className?: string;
  variant?: "primary" | "icon";
}

export const Button: FC<IProps> = ({
  component = "button",
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const Component = component;

  return (
    <Component className={classNames(className, styles.wrapper)} {...props}>
      {variant === "icon" ? (
        children
      ) : (
        <Text className={styles.text}>{children}</Text>
      )}
    </Component>
  );
};
