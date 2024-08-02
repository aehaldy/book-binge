export type SearchResult = {
  key: string;
  title: string;
  author_name: string;
  first_publish_year: number;
  number_of_pages_median: number;
  subject: string[];
  ratings_average: number;
  currently_reading_count: number;
  cover_i: number;
}

export type SearchResponse = {
  docs: SearchResult[];
}
