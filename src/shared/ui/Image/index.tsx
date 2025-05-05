import {FC, ImgHTMLAttributes} from "react";
import {cc} from "../../lib/helpers/cc.ts";

interface IProps extends ImgHTMLAttributes<HTMLElement> {
    className?: string;
}

export const Image: FC<IProps> = ({className, ...props}) => {
    return <img className={cc(className)} {...props} />;
};
