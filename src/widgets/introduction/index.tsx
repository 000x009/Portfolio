import {FC} from "react";
import {Text} from "../../shared/ui/Text";

export const Introduction: FC = () => {
    return (
        <div className="flex px-6 py-20 flex-col text-center text-black mt-[100px]">
            <Text className="text-5xl m-[0 auto] transform-[scaleX(3)]">SOFTWARE DEVELOPER</Text>
            <Text className="text-2xl m-[0 auto] transform-[scaleX(2)]">Fullstack <span
                className="text-(--primary-color) text-shadow-(--text-shadow)">+</span> Junior</Text>
        </div>
    )
}