import React, { useEffect } from "react";
import { Input, Select, Button, Row, Col } from "antd";

const { Option } = Select;

export const Character = (): JSX.Element => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <Input placeholder="Basic usage" />
        </Col>
        <Col>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        <Col>
          <Button type="primary">Primary Button</Button>
        </Col>
      </Row>
    </>
  );
};
