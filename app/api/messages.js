import clientApi from "../api/clients";

const endPoint = "/messages";

const send = (message, listingId) =>
  clientApi.post(endPoint, { message, listingId });

const get = () => clientApi.get(endPoint);

export default { send, get };
