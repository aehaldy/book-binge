import styles from './index.module.scss';
import SearchBar from "@/ui-library/search-bar";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function SearchBanner() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  const searchCallback = async (query: string) => {
    await push(`/?query=${query}`, undefined, { shallow: true })
  };

  return(<div className={styles.searchBanner}>
    <div className={styles.searchBarContainer}>
      <SearchBar
        onSearchCallback={searchCallback}
        placeholderText={formatMessage(messages.placeholderText)}
      />
    </div>
  </div>);
};
