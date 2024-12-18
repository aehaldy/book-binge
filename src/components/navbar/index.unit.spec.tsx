import { screen } from "@testing-library/react";
import { render } from "@/test-util-render";
import React from 'react';
import Navbar from "@/components/navbar/index";


const renderNavbar = () => render(
  <Navbar  />
);

describe("Navbar", () => {
  it("Displays a logo that links to the home page", async () => {
    renderNavbar();
    const logo = screen.getByText("Book Binge") as HTMLAnchorElement;
    expect(logo.href).toContain("/");
  });

  it("Has a 'Search' link that goes to the home page", async () => {
    renderNavbar();
    const search = screen.getByText("Search") as HTMLAnchorElement;
    expect(search.href).toContain("/");
  });

  it("Has a 'Want to read' link that goes to the 'Want to read' page", async () => {
    renderNavbar();
    const wantToRead = screen.getByText("Want to read") as HTMLAnchorElement;
    expect(wantToRead.href).toContain("/want-to-read");
  });

  it("Has a 'Finished reading' link that goes to the 'Finished reading' page", async () => {
    renderNavbar();
    const finishedReading = screen.getByText("Finished reading") as HTMLAnchorElement;
    expect(finishedReading.href).toContain("/finished");
  });
});