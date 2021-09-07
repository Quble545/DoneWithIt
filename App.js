import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import Screen from "./app/components/Screen";
import AppNavigation from "./app/navigation/AppNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/authStorage";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(true);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    setUser(user);
  };

  if (isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(false)}
        onError={(error) => console.log("Aploading error in app.js: ", error)}
      />
    );

  return (
    <Screen>
      <AuthContext.Provider value={{ user, setUser }}>
        {user ? <AppNavigation /> : <AuthNavigation />}
      </AuthContext.Provider>
    </Screen>
  );
};

export default App;
