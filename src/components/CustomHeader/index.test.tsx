import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./index";
import { QueryProvider } from "../../providers";

const Wrapper = () => (
  <QueryProvider>
    <CustomHeader />
  </QueryProvider>
);

describe("CustomHeader", () => {
  it("find logo marvel", async () => {
    render(<Wrapper />);
    const logo = screen.getByAltText("logo marvel");
    expect(logo).toBeInTheDocument();
  });
});
