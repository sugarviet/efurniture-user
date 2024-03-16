import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API, USER_API, BANKING_API } from "../../api/utils";
import axios from 'axios';

const fetch_banking_transaction = async (url) => {
  const data = await BANKING_API.get(url)
    .then((response) => response.data)
    .then((data) => data.data.records);

  return data;
};

const fetch_outside_system = async (url) => {
  const data = await axios.get(url)
    .then((response) => response.data)
    .then((data) => data.results);

  return data;
};

const fetcher = async (url, params) => {
  const data = await API.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

const fetcher_with_auth = async (url, params) => {
  const data = await USER_API.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

export const useFetch = (url, params) => {
  return useQuery([url, params], () => fetcher(url, params));
};

export const useFetchOutsideSystem = (url, params) => {
  return useQuery([url, params], () => fetch_outside_system(url, params));
};

export const useFetchBanking = (url, params) => {
  return useQuery([url, params], () => fetch_banking_transaction(url, params));
};

export const useFetchWithAuth = (url, params, options) => {
  return useQuery([url, params], () => fetcher_with_auth(url, params), options);
}

const useGenericMutation = (func, key, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess: (data) => {
      onSuccessAPI(data);
    },
    onError: (error) => {
      onErrorAPI(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key, params]);
    },
  });
};

export const useDeleteAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => USER_API.delete(url, { data }),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePost = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (data) => API.post(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePostAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => USER_API.post(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (data) => API.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useDeleteWithAuth = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    () => USER_API.delete(url),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePostWithAuth = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => USER_API.post(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePostWithBankingTransaction = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => BANKING_API.post(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdateWithAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => USER_API.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};