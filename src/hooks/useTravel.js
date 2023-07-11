import { createContext, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { useGetCities } from "hooks/query/useGetCities";

const useTravel = () => {
  const [searchCity, setSearchCity] = useState("");
  const [debouncedSearchCity] = useDebounce(searchCity, 400);

  const { data: cities } = useGetCities(debouncedSearchCity);

  const citiesOptions = useMemo(() => {
    if (!cities) return [];

    return cities.data.map((city) => ({
      label: city.name,
      value: city._id,
    }));
  }, [cities]);

  return {
    state: {
      cities: cities?.data || [],
      citiesOptions,
    },
    mutations: {
      setSearchCity,
    },
  };
};

const ContextTravel = createContext({});

export { useTravel, ContextTravel };
