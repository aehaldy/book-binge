import { SearchResult } from "@/services/models/searchResult";
import { useIntl } from "react-intl";
import messages from "./messages";
import styles from "./index.module.scss";
import StarRating from "@/ui-library/star-rating";

const mockCoverImage = () => (
  <div style={{
    backgroundColor: "gray",
    width: "11.25rem",
    height: "17.875rem",
    borderRadius: "6px"}}/>
)

type ExpandedContentsProps = {
  book: SearchResult;
}

export default function ExpandedContents({ book }: ExpandedContentsProps) {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.gridContainer}>
      <div className={styles.coverImage}>{mockCoverImage()}</div>
      <div className={styles.bibData}>
        <div>{formatMessage(messages.firstPublished, { date: book.first_publish_year })}</div>
        <div>{formatMessage(messages.pageCount, { count: book.number_of_pages_median })}</div>
        <div className={styles.readingCount}>
          {formatMessage(messages.numberPeopleReading, { count: book.currently_reading_count })}
        </div>
      </div>
      <div className={styles.averageRating}>
        <div>{formatMessage(messages.averageRating)}:</div>
        <StarRating interactive={false} displayRating={book.ratings_average}/>
      </div>
      <div className={styles.subjects}>
        <div>{formatMessage(messages.subjects)}:</div>
        <div className={styles.subjectList}>{book.subject.join(", ")}</div>
      </div>
    </div>
  )
}
