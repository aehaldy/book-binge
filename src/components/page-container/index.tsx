import { PropsWithChildren, ReactNode } from "react";

type PageContainerProps = {
  title: string;
}

type PageContainerPropsWithChildren = PropsWithChildren & PageContainerProps;

export default function PageContainer({title, children}: PageContainerPropsWithChildren) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
