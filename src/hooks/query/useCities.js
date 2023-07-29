import { useQuery } from "react-query";
import axios from "axios";
import { API_BASE_URL } from "utils/constants";

export const useGetCities = (searchCity) => {
  return useQuery(
    ["cities", searchCity],
    async () =>
      axios.get("/routes/cities", {
        baseURL: API_BASE_URL,
        params: {
          name: searchCity,
        },
      }),
    { enabled: Boolean(searchCity) }
  );
};
