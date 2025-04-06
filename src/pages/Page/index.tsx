import { FC, ReactNode } from "react";

interface IPageProps {
  children?: ReactNode;
}

export const Page: FC<IPageProps> = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};
