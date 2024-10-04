import { useIntl } from "react-intl";
import message from "./messages";
import styles from "./index.module.scss";


export default function LandingPage() {
  const { formatMessage } = useIntl();

  return(
    <div className={styles.greeting}>
      <div>{formatMessage(message.greetingLineOne)}</div>
      <div>{formatMessage(message.greetingLineTwo)}</div>
      <div>{formatMessage(message.greetingLineThree)}</div>
      <div>{formatMessage(message.greeingLineFour)}</div>
    </div>
  );
}