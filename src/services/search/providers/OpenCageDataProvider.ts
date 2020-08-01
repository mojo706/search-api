import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getPlaces = async (query: string | undefined) => {
  const key = process.env.OPEN_CAGE_DATA_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
  const response = await axios.get(url);
  return response.data;
};