import Navbar from "@/components/navbar";
import { PropsWithChildren, useState } from "react";
import SearchBanner from "../search-banner";
import LandingPage from "@/components/landing-page";
import { SearchResult } from "@/services/models/searchResult";
import PageContainer from "@/components/page-container";
import SearchResults from "@/components/search-results";

export default function MainContainer({children}: PropsWithChildren) {
  const [ searchResults, setSearchResults ] = useState<SearchResult[]>([]);

  const renderHomePage = () => searchResults?.length
    ? (<PageContainer title={"Search results"}>
        <SearchResults searchResults={searchResults} />
      </PageContainer>)
    : <LandingPage />;

  return (
    <>
      <Navbar/>
      <SearchBanner setSearchResults={setSearchResults}/>
      { children ? children : renderHomePage()}
    </>
  );
}
