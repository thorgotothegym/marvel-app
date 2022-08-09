import React, { useEffect } from "react";
import { Descriptions } from "antd";
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
                <div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <img
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
                    alt={item.name}
                  />
                </div>
                <Descriptions title="Events">
                  <Descriptions.Item label="Events available">
                    {item.events?.available}
                  </Descriptions.Item>
                  <Descriptions.Item label="CollectionURI">
                    <a href={item.events?.collectionURI}>
                      CollectionURI click here
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Returned">
                    {item.events?.returned}
                  </Descriptions.Item>
                  {item.events?.items.map((moreItems, key) => {
                    return (
                      <Descriptions.Item key={key.toString()}>
                        <p>{moreItems.name}</p>
                        <p>{moreItems.resourceURI}</p>
                        <p>{moreItems.type}</p>
                      </Descriptions.Item>
                    );
                  })}
                </Descriptions>
                <Descriptions title="Stories">
                  <Descriptions.Item label="Available">
                    {item.stories?.available}
                  </Descriptions.Item>
                  <Descriptions.Item label="CollectionURI">
                    <a href={item.stories?.collectionURI}>
                      CollectionURI click here
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Returned">
                    {item.stories?.returned}
                  </Descriptions.Item>
                  {item.stories?.items.map((moreItems, key) => {
                    return (
                      <Descriptions.Item key={key.toString()}>
                        <p>name: {moreItems.name}</p>
                        <p>resourceURI: {moreItems.resourceURI}</p>
                        <p>type: {moreItems.type}</p>
                      </Descriptions.Item>
                    );
                  })}
                </Descriptions>
                <Descriptions title="Series">
                  <Descriptions.Item label="Available">
                    {item.series?.available}
                  </Descriptions.Item>
                  <Descriptions.Item label="CollectionURI">
                    <a href={item.series?.collectionURI}>
                      CollectionURI click here
                    </a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Returned">
                    {item.series?.returned}
                  </Descriptions.Item>
                  {item.series?.items.map((moreItems, key) => {
                    return (
                      <Descriptions.Item key={key.toString()}>
                        <p>{moreItems.name}</p>
                        <p>{moreItems.resourceURI}</p>
                      </Descriptions.Item>
                    );
                  })}
                </Descriptions>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
