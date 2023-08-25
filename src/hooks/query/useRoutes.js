import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { API_BASE_URL } from "utils/constants";

export const useGetRoutes = (params, { onSuccess } = {}) => {
  const {
    fromCityId,
    toCityId,
    dateStart,
    dateEnd,
    dateStartArrival,
    dateEndArrival,
    haveFirstClass,
    haveSecondClass,
    haveThirdClass,
    haveFourthClass,
    haveWifi,
    haveAirConditioning,
    haveExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo,
    limit,
    offset,
    sort,
  } = params;

  return useQuery(
    ["routes", params],
    async () =>
      axios.get("/routes", {
        baseURL: API_BASE_URL,
        params: {
          from_city_id: fromCityId,
          to_city_id: toCityId,
          date_start: dateStart,
          date_end: dateEnd,
          date_start_arrival: dateStartArrival,
          date_end_arrival: dateEndArrival,
          have_first_class: haveFirstClass,
          have_second_class: haveSecondClass,
          have_third_class: haveThirdClass,
          have_fourth_class: haveFourthClass,
          have_wifi: haveWifi,
          have_air_conditioning: haveAirConditioning,
          have_express: haveExpress,
          price_from: priceFrom,
          price_to: priceTo,
          start_departure_hour_from: startDepartureHourFrom,
          start_departure_hour_to: startDepartureHourTo,
          start_arrival_hour_from: startArrivalHourFrom,
          start_arrival_hour_to: startArrivalHourTo,
          end_departure_hour_from: endDepartureHourFrom,
          end_departure_hour_to: endDepartureHourTo,
          end_arrival_hour_from: endArrivalHourFrom,
          end_arrival_hour_to: endArrivalHourTo,
          limit,
          offset,
          sort,
        },
      }),
    { enabled: Boolean(fromCityId && toCityId), onSuccess }
  );
};

export const useGetLastRoutes = () => {
  return useQuery(["last-routes"], async () =>
    axios.get("/routes/last", {
      baseURL: API_BASE_URL,
    })
  );
};

export const useGetRouteSeats = (params) => {
  const {
    id,
    haveFirstClass,
    haveSecondClass,
    haveThirdClass,
    haveFourthClass,
    haveWifi,
    haveAirConditioning,
  } = params;

  return useQuery(
    ["route-seats", params],
    async () =>
      axios.get(`/routes/${id}/seats`, {
        baseURL: API_BASE_URL,
        params: {
          have_first_class: haveFirstClass,
          have_second_class: haveSecondClass,
          have_third_class: haveThirdClass,
          have_fourth_class: haveFourthClass,
          have_wifi: haveWifi,
          have_air_conditioning: haveAirConditioning,
        },
      }),
    {
      enabled: Boolean(id),
    }
  );
};

export const useOrderCreate = () => {
  return useMutation(({ data }) =>
    axios.post("/routes/order", data, {
      baseURL: API_BASE_URL,
    })
  );
};
