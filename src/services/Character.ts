import api from "../api";
import { DataFummy } from "../Models";

export const findAll = async () => {
  const response = await api.get<DataFummy>("/characters?");
  return response.data;
};

export const findByName = async (nameStartsWith: string, orderBy: string) => {
  const response = await api.get<any>(
    `characters?nameStartsWith=${nameStartsWith}&orderBy=${orderBy}`
  );
  return response.data;
};

export const findByID = async (characterId: number) => {
  const response = await api.get<DataFummy>(`characters/${characterId}`);
  console.log("findbyid", response.data);
  return response.data;
};
