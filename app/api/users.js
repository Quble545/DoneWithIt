import clientApi from "./clients";

const endPoint = "/users";
const register = (user) => clientApi.post(endPoint, user);

export default { register };
