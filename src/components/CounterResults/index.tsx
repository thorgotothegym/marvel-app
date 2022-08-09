import React from "react";
import { Alert } from "antd";

interface CounterResultsProps {
  total: number;
}

export const CounterResults = ({ total }: CounterResultsProps): JSX.Element => {
  return (
    <Alert
      style={{ textAlign: "center" }}
      type={total > 0 ? "success" : "warning"}
      message={
        total > 0
          ? `${total} matches have been found with your search`
          : `Oops, no results found. Try another search`
      }
    />
  );
};
