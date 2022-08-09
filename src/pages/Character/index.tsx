import React, { useState } from "react";
import { Input, Select, Button, Row, Col, Table, Alert } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataResult, Results, CommonQueryKeys } from "../../Models";
import { useQuery } from "react-query";
import { findByName } from "../../services/Character";
import { useNavigate } from "react-router-dom";
import { styles } from "./style";
import { CharacterCard } from "../../components/CharacterCard";

const { Option } = Select;

export const Character = (): JSX.Element => {
  const [heroe, setHeroe] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  let navigate = useNavigate();
  const handleButton = (value: string) => {
    setOrderBy(value);
  };
  const { data, isLoading, refetch, status } = useQuery<DataResult, Error>(
    CommonQueryKeys.FINDBYNAME,
    async () => {
      return await findByName(heroe, orderBy);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setTotal(res.data.total);
      },
      onError: (err) => {
        console.log(err.message);
      },
    }
  );

  const columns: ColumnsType<Results> = [
    {
      dataIndex: "thumbnail",
      render: (_, record) => (
        <div style={styles.container}>
          <CharacterCard
            description={record.description}
            name={record.name}
            thumbnail={record.thumbnail}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <Row justify="center" align="middle">
        <Col style={styles.column.heroe}>
          <Input
            value={heroe}
            onChange={(event) => {
              setHeroe(event.target.value);
            }}
            allowClear
            placeholder="Search your hero by name (case sensitive)"
          />
        </Col>
        <Col style={styles.column.orderBy}>
          <label style={styles.column.label}>Order by:</label>
          <Select
            defaultValue="name"
            style={{ width: 220 }}
            onChange={(value) => {
              handleButton(value);
            }}
            value={orderBy}
          >
            <Option value="name">Name in ascending order</Option>
            <Option value="-name">Name descending order</Option>
            <Option value="modified">Modified in ascending order</Option>
            <Option value="-modified">Modified descending order</Option>
          </Select>
        </Col>
        <Col style={styles.column.search}>
          <Button
            onClick={() => {
              refetch();
            }}
            type="primary"
          >
            Primary Button
          </Button>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col></Col>
        <Col>
          {isLoading ? (
            "loading..."
          ) : (
            <Table
              rowKey="name"
              dataSource={data?.data.results}
              columns={columns}
              tableLayout="fixed"
              onRow={(record) => {
                return {
                  onClick: () => {
                    navigate(`/${record.id}`, { state: { record } });
                  },
                };
              }}
            />
          )}
          {status === "success" ? (
            <Alert
              style={{ textAlign: "center" }}
              type="success"
              message={`${20} matches have been found with your search`}
            />
          ) : null}
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
