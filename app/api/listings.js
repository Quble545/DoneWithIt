import clientApi from "../api/clients";

const endPoint = "/listings";

const getListings = () => clientApi.get(endPoint);

const addListings = (item, axiosConfig) => {
  const data = new FormData();

  data.append("title", item.title);
  data.append("price", item.price);
  data.append("categoryId", item.categoryId);
  data.append("description", item.description);

  item.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (item.location) data.append("location", JSON.stringify(item.location));

  return clientApi.post(endPoint, data, axiosConfig);
};

export default { getListings, addListings };
