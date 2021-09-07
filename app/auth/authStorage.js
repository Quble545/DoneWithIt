import * as secureStorage from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const store = async (value) => {
  try {
    await secureStorage.setItemAsync(key, value);
  } catch (error) {
    console.log("auth secure storing", error);
  }
};

const get = async () => {
  try {
    const authToken = await secureStorage.getItemAsync(key);
    if (!authToken) return null;

    return authToken;
  } catch (error) {
    console.log("get Auth ", error);
  }
};

const remove = async () => {
  try {
    secureStorage.deleteItemAsync(key);
  } catch (error) {
    console.log("Remove auth token: ", error);
  }
};

const getUser = async () => {
  const authToken = await get();
  if (!authToken) return null;

  const user = jwtDecode(authToken);
  return user;
};

export default { store, get, delete: remove, getUser };
