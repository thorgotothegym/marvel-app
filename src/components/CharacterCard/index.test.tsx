import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterCard } from "./index";
import { QueryProvider } from "../../providers";

const Wrapper = () => (
  <QueryProvider>
    <CharacterCard
      thumbnail={{
        extension: "jpg",
        path: "path-url-sumperman",
      }}
      name={"superman"}
    />
  </QueryProvider>
);

describe("CharacterCard", () => {
  it("superman name testing card", async () => {
    render(<Wrapper />);
    const heroe = screen.getByText("superman");
    expect(heroe).toBeInTheDocument();
  });
  it("the card must have an alt", async () => {
    render(<Wrapper />);
    const alt = screen.getByAltText("superman");
    expect(alt).toBeInTheDocument();
  });
});
