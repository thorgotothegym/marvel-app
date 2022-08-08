import React from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = (): JSX.Element => {
  let params = useParams();
  return <div>CharacterDetails Invoice {params.id}</div>;
};
