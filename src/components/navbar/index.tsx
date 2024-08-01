import Link from "next/link";
import Navlink from "@/components/navbar/navlink";
import styles from "./index.module.scss";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function Navbar() {
  const { formatMessage } = useIntl();

  return(<div className={styles.navbar}>
    <div>
      <Link href={"/"} className={styles.appName}>
        <FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
        Book Binge
      </Link>
    </div>
    <ul>
      <li><Navlink displayText={formatMessage(messages.searchNavlink)} linkPath={"/"}/></li>
      <li><Navlink displayText={"Want to read"} linkPath={"want-to-read"} /></li>
      <li><Navlink displayText={"Finished reading"} linkPath={"finished"} /></li>
    </ul>
  </div>)
}