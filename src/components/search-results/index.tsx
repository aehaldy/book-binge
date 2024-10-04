import { SearchResult } from "@/services/models/searchResult";
import BookCard from "@/components/book-card";

type SearchResultsProps = {
  searchResults: SearchResult[];
}


export default function SearchResults({searchResults}: SearchResultsProps) {
  return(
    <>
      {searchResults.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          buttons={[<button key={book.key}>BTN</button>]}
        />))}
    </>
  );
}