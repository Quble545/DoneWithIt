import asyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = { timeStamp: Date.now(), value };
    await asyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("cache store", error);
  }
};

const isExpirte = (item) => {
  const now = dayjs();
  const timeStamp = dayjs(item.timeStamp);
  return now.diff(timeStamp, "minute") > 30;
};

const get = async (key) => {
  try {
    const value = await asyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpirte(item)) {
      await asyncStorage.removeItem(prefix + key);

      return null;
    }

    return item.value;
  } catch (error) {
    console.log("get cache:", error);
  }
};

export default { store, get };
