import React, { useEffect } from "react";
import { Button, Col, Descriptions, Divider, Row, Typography } from "antd";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { CommonQueryKeys, EventSeriesAndStories } from "../../Models";
import { findByID } from "../../services/Character";
import { styles } from "./styles";
import Link from "antd/lib/typography/Link";

export const CharacterDetails = (): JSX.Element => {
  const { Text } = Typography;
  let { id } = useParams();
  const navigate = useNavigate();
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
      <Row justify="center" align="middle">
        {byID.status === "error" ? (
          <Text type="danger">
            Wow this is embarrassing... the character you are looking for does
            not exist. <Link onClick={() => navigate("/")}>Back to list</Link>
          </Text>
        ) : null}
        {byID.isLoading ? (
          <Col>Loading...</Col>
        ) : (
          <>
            {byID.data?.data.results.map((item) => {
              return (
                <div key={item.id}>
                  <Row>
                    <Col>
                      <Button
                        type="primary"
                        style={styles.navigation}
                        onClick={() => navigate(-1)}
                      >
                        Go back to the list of characters
                      </Button>
                    </Col>
                  </Row>
                  <Row justify="center" align="middle">
                    <Col span={12}>
                      <img
                        src={
                          item.thumbnail.path + "." + item.thumbnail.extension
                        }
                        alt={item.name}
                      />
                    </Col>
                    <Col span={12}>
                      {item.name ? (
                        <>
                          <Typography>
                            <h4>Who is {item.name}?</h4>
                          </Typography>
                        </>
                      ) : (
                        <Typography>
                          Oops, where is not data available
                        </Typography>
                      )}
                      {item.description ? (
                        <Text type="secondary">{item.description}</Text>
                      ) : (
                        <Typography>
                          Oops... we have no information on the character
                        </Typography>
                      )}
                    </Col>
                  </Row>

                  <Descriptions title="Events">
                    <Descriptions.Item label="Events available">
                      {item.events?.available === 0 ? (
                        <Typography.Text type="danger">
                          Oops... no events available
                        </Typography.Text>
                      ) : (
                        item.events?.available
                      )}
                    </Descriptions.Item>
                    <Descriptions.Item label="CollectionURI">
                      <a href={item.events?.collectionURI}>
                        CollectionURI click here
                      </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Returned">
                      {item.events?.returned === 0 ? (
                        <Typography.Text type="danger">
                          "Oops... no results"
                        </Typography.Text>
                      ) : (
                        <Text>{item.events?.returned} </Text>
                      )}
                    </Descriptions.Item>
                    {item.events?.items.length === 0 ? null : (
                      <>
                        {item.events?.items.map((moreItems, key) => {
                          return (
                            <Descriptions.Item key={key.toString()}>
                              <Text strong>{moreItems.name} </Text>
                              <br />
                              <Text italic> {moreItems.resourceURI}</Text>
                              <Text italic>{moreItems.type}</Text>
                            </Descriptions.Item>
                          );
                        })}
                      </>
                    )}
                  </Descriptions>
                  <Divider plain />
                  <Descriptions title="Stories">
                    <Descriptions.Item label="Stories available">
                      {item.stories?.available === 0 ? (
                        <Typography.Text type="danger">
                          Oops... no stories available
                        </Typography.Text>
                      ) : (
                        item.stories?.available
                      )}
                    </Descriptions.Item>
                    <Descriptions.Item label="CollectionURI">
                      <a href={item.stories?.collectionURI}>
                        CollectionURI click here
                      </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Returned">
                      {item.stories?.returned === 0 ? (
                        <Typography.Text type="danger">
                          "Oops... no results"
                        </Typography.Text>
                      ) : (
                        <Text>{item.stories?.returned} </Text>
                      )}
                    </Descriptions.Item>
                    {item.stories?.items.length === 0 ? null : (
                      <>
                        {item.stories?.items.map((moreItems, key) => {
                          return (
                            <Descriptions.Item key={key.toString()}>
                              <Text strong>{moreItems.name} </Text>
                              <Text italic> {moreItems.resourceURI}</Text>
                              <Text italic>{moreItems.type}</Text>
                            </Descriptions.Item>
                          );
                        })}
                      </>
                    )}
                  </Descriptions>
                  <Divider plain />
                  <Descriptions title="Series">
                    <Descriptions.Item label="Series available">
                      {item.series?.available === 0 ? (
                        <Typography.Text type="danger">
                          Oops... no series available
                        </Typography.Text>
                      ) : (
                        item.series?.available
                      )}
                    </Descriptions.Item>
                    <Descriptions.Item label="CollectionURI">
                      <a href={item.series?.collectionURI}>
                        CollectionURI click here
                      </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Returned">
                      {item.series?.returned === 0 ? (
                        <Typography.Text type="danger">
                          "Oops... no results"
                        </Typography.Text>
                      ) : (
                        <Text>{item.series?.returned} </Text>
                      )}
                    </Descriptions.Item>
                    {item.series?.items.length === 0 ? null : (
                      <>
                        {item.series?.items.map((moreItems, key) => {
                          return (
                            <Descriptions.Item key={key.toString()}>
                              <Text strong>{moreItems.name} </Text>
                              <Text italic> {moreItems.resourceURI}</Text>
                            </Descriptions.Item>
                          );
                        })}
                      </>
                    )}
                  </Descriptions>
                </div>
              );
            })}
          </>
        )}
      </Row>
    </>
  );
};
