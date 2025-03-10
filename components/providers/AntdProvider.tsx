import { ReactNode } from "react";

const AntdProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default AntdProvider;
