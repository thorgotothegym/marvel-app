import api from "../api";

const API_URL = process.env.REACT_APP_API_PUBLIC;
const PRIVATE = process.env.REACT_APP_API_PRIVATE;

export const getCharactersWithParams = async (
  nameStartsWith: string
): Promise<any[]> => {
  const { data } = await api.get(
    `characters?nameStartsWith=bat&apikey=${PRIVATE}`
  );

  return data;
};
