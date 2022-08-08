import api from "../api";
import { DataResult, EventSeriesAndStories } from "../Models";

export const findAll = async () => {
  const response = await api.get<DataResult>("/characters?");
  return response.data;
};

export const findByName = async (nameStartsWith: string, orderBy: string) => {
  const response = await api.get<any>(
    `characters?nameStartsWith=${nameStartsWith}&orderBy=${orderBy}`
  );
  return response.data;
};

export const findByID = async (characterId: number) => {
  const response = await api.get<EventSeriesAndStories>(
    `characters/${characterId}`
  );
  return response.data;
};
