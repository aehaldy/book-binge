import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "@/test-util-render";
import React from 'react';
import MainContainer from "@/components/main-container/index";
import { mockSearchResponse } from "@/services/models/mockSearchResult";
import { getSearchResults } from "@/services/openLibraryService";

jest.mock("../../services/openLibraryService", () => ({
  ...jest.requireActual("../../services/openLibraryService"),
  getSearchResults: jest.fn(),
}));

const mockedGetSearchResults = getSearchResults as jest.Mocked<typeof getSearchResults>;

const renderMainContainer = () => render(
  <MainContainer  />
);

describe("Main Container", () => {
  it("Displays the landing page when there is no search query", () => {
    renderMainContainer();
    const landingPage = screen.getByText("Search thousands of titles.");
    expect(landingPage).toBeInTheDocument();
  });

  it("Displays search results when a query is entered in the search bar", async () => {
    mockedGetSearchResults.mockResolvedValueOnce({
      status: 200,
      data: mockSearchResponse,
    });

    renderMainContainer();

    const searchBar = screen.getByPlaceholderText("Search for a book by title, author, or keyword...");
    await waitFor(() => fireEvent.change(searchBar, { target: { value: "test" } }));

    const searchButton = screen.getByRole("button", { name: "search" });
    await waitFor(() => fireEvent.click(searchButton));

    const searchResults = screen.getByText("Search results");
    const titleOne = screen.getByText("Title");
    const titleTwo = screen.getByText("Title 2");

    expect(searchResults).toBeInTheDocument();
    expect(titleOne).toBeInTheDocument();
    expect(titleTwo).toBeInTheDocument();
  });

  it("Handles errors when fetching search results and stays on the landing page", async () => {
    mockedGetSearchResults.mockRejectedValueOnce(new Error("Network Error"));
    const originalError = console.error;
    console.error = jest.fn();

    renderMainContainer();

    const searchBar = screen.getByPlaceholderText("Search for a book by title, author, or keyword...");
    await waitFor(() => fireEvent.change(searchBar, { target: { value: "test" } }));

    const searchButton = screen.getByRole("button", { name: "search" });
    await waitFor(() => fireEvent.click(searchButton));

    const landingPage = screen.getByText("Search thousands of titles.");
    expect(landingPage).toBeInTheDocument();

    console.error = originalError;
  });
});
