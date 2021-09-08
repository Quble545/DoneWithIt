import { create } from "apisauce";
import storage from "../utility/cache";
import authStorage from "../auth/authStorage";
import settings from "../config/settings";

const clientApi = create({ baseURL: settings.apiUrl });

clientApi.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.get();

  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

const get = clientApi.get;

clientApi.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    storage.store(url, response.data);

    return response;
  }

  const data = await storage.get(url);

  return data ? { ok: true, data } : response;
};

export default clientApi;
