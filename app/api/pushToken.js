import clientApi from "./clients";

const endPoint = "/expoPushTokens";

const register = (pushToken) => clientApi.post(endPoint, { token: pushToken });

export default { register };
