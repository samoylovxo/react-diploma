import { useQuery } from "react-query";
import axios from "axios";
import { API_BASE_URL } from "utils/constants";

// {
//   "total_count": 0,
//   "items": [
//     {
//       "have_first_class": true,
//       "have_second_class": true,
//       "have_third_class": true,
//       "have_fourth_class": true,
//       "have_wifi": true,
//       "have_air_conditioning": true,
//       "is_express": true,
//       "min_price": 0,
//       "arrival": {
//         "_id": "string",
//         "have_first_class": true,
//         "have_second_class": true,
//         "have_third_class": true,
//         "have_fourth_class": true,
//         "have_wifi": true,
//         "have_air_conditioning": true,
//         "train": {
//           "_id": "string",
//           "name": "string"
//         },
//         "from": {
//           "railway_station_name": "string",
//           "city": {
//             "_id": "string",
//             "name": "string"
//           },
//           "datetime": 0
//         },
//         "to": {
//           "railway_station_name": "string",
//           "city": {
//             "_id": "string",
//             "name": "string"
//           },
//           "datetime": 0
//         },
//         "min_price": 0,
//         "duration": 0,
//         "price_info": {
//           "first": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "second": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "third": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "fourth": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           }
//         },
//         "seats_info": {
//           "first": 0,
//           "second": 0,
//           "third": 0,
//           "fourth": 0
//         }
//       },
//       "departure": {
//         "_id": "string",
//         "have_first_class": true,
//         "have_second_class": true,
//         "have_third_class": true,
//         "have_fourth_class": true,
//         "have_wifi": true,
//         "have_air_conditioning": true,
//         "train": {
//           "_id": "string",
//           "name": "string"
//         },
//         "from": {
//           "railway_station_name": "string",
//           "city": {
//             "_id": "string",
//             "name": "string"
//           },
//           "datetime": 0
//         },
//         "to": {
//           "railway_station_name": "string",
//           "city": {
//             "_id": "string",
//             "name": "string"
//           },
//           "datetime": 0
//         },
//         "min_price": 0,
//         "duration": 0,
//         "price_info": {
//           "first": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "second": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "third": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           },
//           "fourth": {
//             "price": 0,
//             "top_price": 0,
//             "bottom_price": 0,
//             "side_price": 0,
//             "linens_price": 0,
//             "wifi_price": 0
//           }
//         },
//         "seats_info": {
//           "first": 0,
//           "second": 0,
//           "third": 0,
//           "fourth": 0
//         }
//       },
//       "total_avaliable_seats": 0
//     }
//   ]
// }

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
