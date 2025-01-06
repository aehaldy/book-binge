import { screen } from "@testing-library/react";
import { render } from "@/test-util-render";
import React from 'react';
import FinishedReading from "@/pages/finished/index";

const renderFinished = () => render(<FinishedReading />)

describe("Want to read page", () => {
  it("Renders", () => {
    renderFinished();
    const finished = screen.queryAllByText("Finished reading");
    expect(finished.length).toBe(2);
  });
});
