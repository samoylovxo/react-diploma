import { createContext, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useForm } from "react-hook-form";
import { useGetCities } from "hooks/query/useCities";
import { useGetRoutes } from "hooks/query/useRoutes";
import { createQueryString } from "utils/utils";
import { SET_VALUE_OPTIONS } from "utils/constants";

const useTravel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateWithQuery = useDebouncedCallback((query) => {
    const { pathname } = location;
    const newQuery = createQueryString(query);

    setRoutesParams(query);

    navigate({
      to: pathname,
      search: newQuery,
    });
  }, 400);

  const [searchCity, setSearchCity] = useState("");
  const [routesParams, setRoutesParams] = useState({});
  const [debouncedSearchCity] = useDebounce(searchCity, 400);

  const params = useMemo(() => {
    if (!location.search) return;

    const searchParams = Object.fromEntries(
      new URLSearchParams(location.search)
    );

    setRoutesParams(searchParams);

    return searchParams;
  }, [location.search]);

  const form = useForm({
    mode: "onSubmit",
    values: params,
  });

  const { data: cities } = useGetCities(debouncedSearchCity);
  const { data: routes } = useGetRoutes(routesParams);

  const citiesOptions = useMemo(() => {
    if (!cities) return [];

    return cities.data.map((city) => ({
      label: city.name,
      value: city._id,
    }));
  }, [cities]);

  const handleFormSetValue = (key, value) => {
    form.setValue(key, value, SET_VALUE_OPTIONS);
    navigateWithQuery(form.watch());
  };

  const handleBaseFormSubmit = (data) => {
    navigateWithQuery(data);
  };

  const handleFormReset = () => {
    navigateWithQuery({});
  };

  return {
    state: {
      formInstance: form,
      formValues: form.getValues(),
      cities: cities?.data || [],
      citiesOptions,
      routes: routes?.data,
    },
    mutations: {
      setSearchCity,
    },
    actions: {
      handleFormSetValue,
      handleBaseFormSubmit,
      handleFormReset,
    },
  };
};

const ContextTravel = createContext({});

export { useTravel, ContextTravel };
