import { screen } from "@testing-library/react";
import { render } from "@/test-util-render";
import React from 'react';
import WantToRead from "@/pages/want-to-read/index";

const renderWantToRead = () => render(<WantToRead />)

describe("Want to read page", () => {
  it("Renders", () => {
    renderWantToRead();
    const wantToRead = screen.queryAllByText("Want to read");
    expect(wantToRead.length).toBe(2);
  });
});
