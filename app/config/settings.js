import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://10.38.174.127:9000/api",
  },
  staging: {
    apiUrl: "https://guarded-beyond-74695.herokuapp.com/api",
  },
  pro: {
    apiUrl: "http://10.38.174.127:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.pro;
};

export default getCurrentSettings();
