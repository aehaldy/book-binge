import Link from "next/link";
import Navlink from "@/components/navbar/navlink";
import styles from "./index.module.scss";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Navbar() {
  return(<div className={styles.navbar}>
    <div>
      {/*<FontAwesomeIcon icon={faBookOpen} className={styles.icon} />*/}
      <Link href={"/"} className={styles.appName}>
        Book Binge
      </Link>
    </div>
    <ul>
      <li><Navlink displayText={"Search"} linkPath={"/"}/></li>
      <li><Navlink displayText={"Want to read"} linkPath={"want-to-read"} /></li>
      <li><Navlink displayText={"Finished reading"} linkPath={"finished"} /></li>
    </ul>
  </div>)
}