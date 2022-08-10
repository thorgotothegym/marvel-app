import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./index";
import { QueryProvider } from "../../providers";

const Wrapper = () => (
  <QueryProvider>
    <Layout />
  </QueryProvider>
);

describe("Layout", () => {
  it("Theme needs to be rendered", async () => {
    render(<Wrapper />);
    const theme = screen.getByTestId("theme");
    expect(theme).toBeInTheDocument();
  });
});
