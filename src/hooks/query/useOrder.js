import { useMutation } from "react-query";
import axios from "axios";
import { API_BASE_URL } from "utils/constants";

export const useOrderCreate = () => {
  return useMutation(
    ({ data }) =>
      axios.post("/order", data, {
        baseURL: API_BASE_URL,
      }),
    {
      onSuccess: (response, { onSuccess }) => {
        if (onSuccess) onSuccess(response);
      },
    }
  );
};
