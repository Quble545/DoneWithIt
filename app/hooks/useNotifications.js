import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";

import pushTokenApi from "../api/pushToken";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default useNotification = (notificationLister) => {
  useEffect(() => {
    registerPushTokenNotification();

    if (notificationLister)
      Notifications.addNotificationResponseReceivedListener(notificationLister);
  }, []);

  const registerPushTokenNotification = async () => {
    try {
      const { granted } = await Notifications.getPermissionsAsync();

      if (!granted) return;

      const { data: pushToken } = await Notifications.getExpoPushTokenAsync();
      pushTokenApi.register(pushToken);
    } catch (error) {
      console.log("pushToken api: ", error);
    }
  };
};
