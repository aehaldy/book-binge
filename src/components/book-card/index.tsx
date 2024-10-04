import { SearchResult } from "@/services/models/searchResult";
import { ReactNode } from "react";
import { useIntl } from "react-intl";
import messages from "./messages";
import styles from "./index.module.scss";

type BookCardProps = {
  book: SearchResult;
  buttons: ReactNode[];
  showUserRating?: boolean;
}

export default function BookCard({ book, buttons, showUserRating = false }: BookCardProps) {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.cardRoot}>
      <h2>{book.title}</h2>
      <div className={styles.byline}>{formatMessage(messages.byAuthor, { author: book.author_name })}</div>
    </div>
  )
}