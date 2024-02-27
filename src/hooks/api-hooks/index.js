import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API, USER_API } from "../../api/utils";

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

export const useFetchWithAuth = (url, params) => {
  return useQuery([url, params], () => fetcher_with_auth(url, params));
};


const useGenericMutation = (func, url, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess:(data) => {
        onSuccessAPI(data);
    },
    onError: (error) => {
      onErrorAPI(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url, params]);
    },
  });
};

export const useDelete = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (id) => API.delete(`${url}/${id}`),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePost = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => API.post(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => API.put(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useDeleteWithAuth = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (id) => USER_API.delete(`${url}/${id}`),
    url,
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

export const useUpdateWithAuth = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => USER_API.put(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};