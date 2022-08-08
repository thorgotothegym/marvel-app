import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CommonQueryKeys, EventSeriesAndStories } from "../../Models";
import { findByID } from "../../services/Character";

export const CharacterDetails = (): JSX.Element => {
  let { id } = useParams();

  const byID = useQuery<EventSeriesAndStories, Error>(
    CommonQueryKeys.FINDBYID,
    async () => {
      return await findByID(Number(id));
    },
    {
      enabled: false,
      onSuccess: (res) => {
        console.log("res", res);
      },
      onError: (err) => {
        console.log(err.message);
      },
    }
  );
  useEffect(() => {
    byID.refetch();
  }, []);
  return (
    <>
      {byID.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {byID.data?.data.results.map((item, key) => {
            return (
              <div key={key.toString()}>
                <ul>
                  <li>Events: {item.events?.available}</li>
                  <li>collectionURI: {item.events?.collectionURI}</li>
                  <li>returned: {item.events?.returned}</li>
                  <li>
                    returned:{" "}
                    {item.events?.items.map((moreItems, key) => {
                      return (
                        <div key={key.toString()}>
                          <p>{moreItems.name}</p>
                          <p>{moreItems.resourceURI}</p>
                          <p>{moreItems.type}</p>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
