import { SearchResponse } from "@/services/models/searchResult";

export const mockSearchResponse: SearchResponse = {
  docs: [
    {
      key: "1",
      title: "Title",
      author_name: "Author",
      first_publish_year: 2000,
      number_of_pages_median: 300,
      subject: ["Coolness", "Testing"],
      ratings_average: 3.5,
      currently_reading_count: 2,
      cover_i: 112233,
    },
    {
      key: "2",
      title: "Title 2",
      author_name: "Author 2",
      first_publish_year: 2002,
      number_of_pages_median: 302,
      subject: ["Testing", "React"],
      ratings_average: 4,
      currently_reading_count: 12,
      cover_i: 223344,
    },
  ],
};