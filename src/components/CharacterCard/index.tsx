import React from "react";
import { Card, Typography } from "antd";

interface CharacterCardProps {
  thumbnail: {
    extension: string;
    path: string;
  };
  name: string;
  description?: string;
}

export const CharacterCard = ({
  thumbnail: { extension, path },
  name,
  description,
}: CharacterCardProps): JSX.Element => {
  return (
    <Card
      hoverable
      style={{ width: 320 }}
      cover={<img alt={name} src={`${path}.${extension}`} />}
    >
      <div>
        <Typography.Text style={{ textAlign: "center" }}>
          <h4>{name}</h4>
        </Typography.Text>
        <Typography.Text type="secondary" style={{ textAlign: "center" }}>
          {description}
        </Typography.Text>
      </div>
    </Card>
  );
};
