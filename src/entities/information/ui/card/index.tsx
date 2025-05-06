import {FC, ReactNode} from "react";
import {Text} from "../../../../shared/ui/Text";
import styles from "./index.module.css"
import {cc} from "../../../../shared/lib/helpers/cc.ts";

interface Props {
    className?: string;
    title?: string;
    children?: ReactNode;
}

export const InformationCard: FC<Props> = ({className, title, children}) => {
    return (
        <div
            className={cc(
                className,
                styles.card,
                "text-white flex-wrap rounded-2xl flex flex-col text-2xl gap-[20px] p-[20px] bg-black flex-1 border-[2px] border-green-500 border-s",
            )}
        >
            <Text className="text-5xl">
                <span className="text-(--primary-color) text-shadow-(--text-shadow)">
                  //
                </span>{" "}
                {title}
            </Text>
            {children}
        </div>
    );
};
