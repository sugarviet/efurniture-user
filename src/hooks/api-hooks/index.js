import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/request";

const fetcher = async (url, params) => {
  const data = await request(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

export const useFetch = (url, params) => {
  return useQuery([url, params], () => fetcher(url, params));
};
