import axios from "axios";
import { getPlaces } from "./OpenCageDataProvider";

jest.mock("axios");
const mockedAxios = axios as any;

describe("OpenCageDataProvider", () => {
  test("an empty query string", async () => {
    const data = { data: { features: [] } };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    console.log("It gets here!!!");
    await expect(getPlaces("Paris")).resolves.toEqual({ features: [] });
  });

  test("an invalid non-json response", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Service Unavailable."))
    );
    await expect(getPlaces("Chamonix")).rejects.toThrow("Service Unavailable.");
  });
});
