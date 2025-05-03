import classNames from "classnames";
import {FC, ImgHTMLAttributes} from "react";

interface IProps extends ImgHTMLAttributes<HTMLElement> {
  className?: string;
}

export const Image: FC<IProps> = ({ className, ...props }) => {
  return <img className={classNames(className)} {...props} />;
};
