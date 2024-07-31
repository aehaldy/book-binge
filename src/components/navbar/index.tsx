import Link from "next/link";
import Navlink from "@/components/navbar/navlink";

export default function Navbar() {
  return(<div>
    <Link href={"/"}>
      Book Binge
    </Link>
    <ul>
      <li><Navlink displayText={"Search"} linkPath={"/"}/></li>
      <li><Navlink displayText={"Want to read"} linkPath={"want-to-read"} /></li>
      <li><Navlink displayText={"Finished reading"} linkPath={"finished"} /></li>
    </ul>
  </div>)
}