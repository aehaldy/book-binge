import Navbar from "@/components/navbar";
import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import SearchBanner from "../search-banner";
import LandingPage from "@/components/landing-page";
import { SearchResult } from "@/services/models/searchResult";
import PageContainer from "@/components/page-container";
import SearchResults from "@/components/search-results";
import { useRouter } from "next/router";
import { getSearchResults } from "@/services/openLibraryService";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function MainContainer({ children }: PropsWithChildren) {
  const { formatMessage } = useIntl();
  const { query } = useRouter();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  const fetchSearchResults = useCallback(async (query: string) => {
    try {
      const response = await getSearchResults(query);
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(query).length) {
      fetchSearchResults(query.query as string);
    } else {
      setSearchResults([]);
    }
  }, [fetchSearchResults, query]);

  const renderHomePage = () => searchResults?.length
    ? (<PageContainer title={formatMessage(messages.searchResults)}>
         <SearchResults searchResults={searchResults} />
       </PageContainer>)
    : <LandingPage />;

  return (<>
    <Navbar />
    <SearchBanner />
    {children ? children : renderHomePage()}
  </>);
}
