import clientApi from "../api/clients";

const endPoint = "/auth";

const login = (user) => clientApi.post(endPoint, user);

export default { login };
