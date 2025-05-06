import {FC} from "react";
import styles from "./index.module.css";
import {Text} from "../../shared/ui/Text";
import {Button} from "../../shared/ui/Button";
import {INavItem, Navigation} from "./ui/Navigation";
import {cc} from "../../shared/lib/helpers/cc.ts";

interface Props {
    className?: string;
}

const navElements: INavItem[] = [
    {id: 0, to: "#about", name: "about"},
    {id: 1, to: "#experience", name: "experience"},
];

export const Header: FC<Props> = ({className, ...restProps}) => {
    return (
        <header className={cc(className, styles.wrapper)} {...restProps}>
            <Text className={styles.name} component="h4" variant="h4">
                <span className={styles.fullname}>Mikhail Shesterov</span> <Text
                className={styles.age}>// 15
                y.o.</Text>
            </Text>
            <Navigation navElements={navElements}/>
            <Button className={styles.contact}>Contact</Button>
        </header>
    );
};
