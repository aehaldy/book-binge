import styles from './index.module.scss';
import SearchBar from "@/ui-library/search-bar";
import { useRouter } from "next/router";

export default function SearchBanner() {
  const { push } = useRouter();

  const searchCallback = async (query: string) => {
    await push(`/?query=${query}`, undefined, { shallow: true })
  };

  return(<div className={styles.searchBanner}>
    <div className={styles.searchBarContainer}>
      <SearchBar
        onSearchCallback={searchCallback}
        placeholderText={"Search for a book by title, author, or keyword..."}
      />
    </div>
  </div>);
};
