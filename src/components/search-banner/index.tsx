import styles from './index.module.scss';
import SearchBar from "@/ui-library/search-bar";
import { getSearchResults } from "@/services/openLibraryService";
import { SearchResult } from "@/services/models/searchResult";

type SearchBannerProps = {
  setSearchResults: (results: SearchResult[]) => void;
};

export default function SearchBanner({setSearchResults}: SearchBannerProps) {
  const searchCallback = async (query: string) => {
    try {
      const response = await getSearchResults(query)
       setSearchResults(response.data.docs);
    } catch (error) {
      console.error(error);
    }
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
