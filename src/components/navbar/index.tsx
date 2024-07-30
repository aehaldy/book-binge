import Link from "next/link";
import Navlink from "@/components/navbar/navlink";

export default function Navbar() {
  return(<div>
    <Link href={"/"}>
      Book Binge
    </Link>
    <div>
      <Navlink displayText={"Want to read"} linkPath={"want-to-read"} />
      <Navlink displayText={"Finished"} linkPath={"finished"} />
    </div>
  </div>)
}