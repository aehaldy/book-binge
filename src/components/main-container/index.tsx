import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";
import SearchBanner from "../search-banner";

export default function MainContainer({children}: PropsWithChildren) {
  return (
    <>
     <Navbar/>
      <SearchBanner/>
      {children}
    </>
  );
}
