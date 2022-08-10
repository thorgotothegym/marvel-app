import React from "react";
import { render, screen } from "@testing-library/react";
import { CounterResults } from "./index";
import { QueryProvider } from "../../providers";

const Wrapper = () => (
  <QueryProvider>
    <CounterResults total={20} key={1} />
  </QueryProvider>
);

const WrapperFalse = () => (
  <QueryProvider>
    <CounterResults total={0} key={1} />
  </QueryProvider>
);

describe("CounterResults", () => {
  it("know that the total is true", async () => {
    render(<Wrapper />);
    const totalTrue = screen.getByText(
      "20 matches have been found with your search"
    );
    expect(totalTrue).toBeInTheDocument();
  });
  it("no results found.", async () => {
    render(<WrapperFalse />);
    const totalTrue = screen.getByText(
      "Oops, no results found. Try another search"
    );
    expect(totalTrue).toBeInTheDocument();
  });
});
