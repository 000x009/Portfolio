import {FC} from "react";
import {Text} from "../../shared/ui/Text";
import styles from "./index.module.css"
import {cc} from "../../shared/lib/helpers/cc.ts";

export const Introduction: FC = () => {
    return (
        <div className={cc(styles.wrapper, "flex p-16 flex-col text-center text-black mt-[100px]")}>
            <Text className={cc(styles.headline, "text-5xl m-[0 auto] transform-[scaleX(3)]")}>SOFTWARE DEVELOPER</Text>
            <Text className={cc(styles.title, "text-2xl m-[0 auto] transform-[scaleX(2)]")}>Fullstack <span
                className="text-(--primary-color) text-shadow-(--text-shadow)">+</span> Junior</Text>
        </div>
    )
}