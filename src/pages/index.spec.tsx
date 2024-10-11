import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from "@/pages/index";

const renderHomePage = () => render(<Home  />)

describe("Application home", () => {
  it("renders correctly", () => {
    renderHomePage();
    const appLogo = screen.getByText("Book Binge");
    expect(appLogo).toBeInTheDocument();
  })
})