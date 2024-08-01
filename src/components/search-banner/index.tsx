import styles from './index.module.scss';
import SearchBar from "@/ui-library/search-bar";

export default function SearchBanner() {
  const searchCallback = (searchTerm: string) => {console.log(searchTerm)};

  return(<div className={styles.searchBanner}>
    <div className={styles.searchBarContainer}>
      <SearchBar
        onSearchCallback={searchCallback}
        placeholderText={"Search for a book by title, author, or keyword..."}
      />
    </div>
  </div>);
};
