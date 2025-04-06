import classNames from "classnames";
import { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../shared/ui/Text";
import { Button } from "../../shared/ui/Button";
import { INavItem, Navigation } from "./ui/Navigation";

interface Props {
  className?: string;
}

const navElements: INavItem[] = [
  { id: 0, to: "/resume", name: "Resume" },
  { id: 1, to: "/experience", name: "Experience" },
];

export const Header: FC<Props> = ({ className, ...restProps }) => {
  return (
    <header className={classNames(className, styles.wrapper)} {...restProps}>
      <Text className={styles.name} component="h4" variant="h4">
        Mikhail Shesterov <Text className={styles.age}>// 15 y.o.</Text>
      </Text>
      <Navigation navElements={navElements} />
      <Button>Hire Me</Button>
    </header>
  );
};
