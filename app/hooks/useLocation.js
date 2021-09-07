import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const handleLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted)
        return alert("You need to enable location to access your location");

      const { coords } = await Location.getCurrentPositionAsync();

      setLocation({ longitude: coords.longitude, latitude: coords.latitude });
    } catch (error) {
      console.log("Location error: ", error);
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return { location };
};
