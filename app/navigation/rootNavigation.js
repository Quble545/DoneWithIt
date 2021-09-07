import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigation.navigate(name, params);
};

export default { navigate };
