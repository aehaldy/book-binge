import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function MainContainer({children}: PropsWithChildren) {
  return (
    <>
     <Navbar/>
      {children}
    </>
  );
}
