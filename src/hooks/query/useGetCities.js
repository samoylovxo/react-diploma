import { useQuery } from "react-query";
import axios from "axios";

const BASE_URL = "https://netology-trainbooking.netoservices.ru";

export const useGetCities = (searchCity) => {
  const { data, isLoading } = useQuery(
    ["cities", searchCity],
    async () =>
      axios.get("/routes/cities", {
        baseURL: BASE_URL,
        params: {
          name: searchCity,
        },
      }),
    { enabled: Boolean(searchCity) }
  );

  return {
    data,
    isLoading,
  };
};
