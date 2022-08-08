import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { DataFummy } from "../../Models";
import { findByID } from "../../services/Character";

export const CharacterDetails = (): JSX.Element => {
  let { id } = useParams();

  const byID = useQuery<DataFummy, Error>("getData", async () => {
    return await findByID(Number(id));
  });
  useEffect(() => {
    byID.refetch();
  }, []);
  return (
    <>
      {byID.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {byID.data?.data.results.map((item) => {
            return (
              <>
                name {item.name} - id {item.id}
              </>
            );
          })}
        </>
      )}
      {/*       {data?.data.results.map((heroe) => {
        return (
          <>
            <p>{heroe.name}</p>
            <p>{heroe.id}</p>
          </>
        );
      })} */}
    </>
  );
};
