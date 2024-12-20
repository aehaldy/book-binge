import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "@/test-util-render";
import React from 'react';
import BookCard, { BookCardProps } from "@/components/book-card/index";
import { SearchResult } from "@/services/models/searchResult";
import { mockSearchResponse } from "@/services/models/mockSearchResult";

const defaultBookCardProps: BookCardProps = {
  book: mockSearchResponse.docs[0] as SearchResult,
  buttons: [<button key="1">BTN</button>],
};

const renderBookCard = (mockProps = defaultBookCardProps) => {
  render(<BookCard book={mockProps.book} buttons={mockProps.buttons} />);
};

describe("Book Card", () => {
  it("should render the book card", () => {
    renderBookCard();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("by Author")).toBeInTheDocument();

    // The card is not expanded, so we also expect NOT to see certain things:
    expect(screen.queryByText("Coolness, Testing")).not.toBeInTheDocument();
    expect(screen.queryByText("First published: 2000")).not.toBeInTheDocument();
    expect(screen.queryByText("Pages: 300")).not.toBeInTheDocument();
    expect(screen.queryByText("2 people are reading this!")).not.toBeInTheDocument();
  });

  it("should render the book card with expanded contents", async () => {
    renderBookCard();

    const expandButton = screen.getByRole("button", { name: "Show more" });
    await waitFor(() => fireEvent.click(expandButton));

    expect(screen.getByText("Coolness, Testing")).toBeInTheDocument();
    expect(screen.getByText("First published: 2000")).toBeInTheDocument();
    expect(screen.getByText("Pages: 300")).toBeInTheDocument();
    expect(screen.getByText("2 people are reading this!")).toBeInTheDocument();
  });

  it("Should hide the expanded contents when the 'Show less' button is clicked", async () => {
    renderBookCard();

    const expandButton = screen.getByRole("button", { name: "Show more" });
    await waitFor(() => fireEvent.click(expandButton));

    const collapseButton = screen.getByRole("button", { name: "Show less" });
    await waitFor(() => fireEvent.click(collapseButton));

    expect(screen.queryByText("Coolness, Testing")).not.toBeInTheDocument();
    expect(screen.queryByText("First published: 2000")).not.toBeInTheDocument();
    expect(screen.queryByText("Pages: 300")).not.toBeInTheDocument();
    expect(screen.queryByText("2 people are reading this!")).not.toBeInTheDocument();
  });
});