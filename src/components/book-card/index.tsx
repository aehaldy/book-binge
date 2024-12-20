import { SearchResult } from "@/services/models/searchResult";
import { ReactNode, useState } from "react";
import { useIntl } from "react-intl";
import messages from "./messages";
import styles from "./index.module.scss";
import ExpandedContents from "@/components/book-card/expanded-contents";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type BookCardProps = {
  book: SearchResult;
  buttons: ReactNode[];
  showUserRating?: boolean;
}

export default function BookCard({ book, buttons, showUserRating = false }: BookCardProps) {
  const { formatMessage } = useIntl();
  const [expanded, setExpanded] = useState(false);

  const toggleCardExpand = () => setExpanded(!expanded);

  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardTop}>
        <div className={styles.headerSection}>
          <div>
            <h2>{book.title}</h2>
            <div className={styles.byline}>
              {formatMessage(messages.byAuthor, { author: book.author_name })}
            </div>
          </div>
          <div className={styles.rightSideButtons}>
            {buttons.map((button) => button)}
          </div>
        </div>
        <div className={styles.showMoreButton}>
          <button onClick={toggleCardExpand}>
            <FontAwesomeIcon className={styles.icon} icon={expanded ? faChevronUp : faChevronDown} />
            {expanded ? formatMessage(messages.showLess) : formatMessage(messages.showMore)}
          </button>
        </div>
      </div>
      {expanded && (
        <ExpandedContents book={book} />
      )}
    </div>
  )
}

