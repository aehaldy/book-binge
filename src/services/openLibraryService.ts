import axios, { type AxiosResponse } from "axios";
import { SearchResponse } from "./models/searchResult";

const BASE_URL = "http://openlibrary.org";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSearchResults = async (query: string): Promise<AxiosResponse<SearchResponse>> => {
  return await apiClient.get(`/search.json?q=${query}&limit=10`);
};

export { getSearchResults };
