import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";
import { InputForm, Form, SubmitForm } from "../components/form";

import ErrorMessage from "../components/ErrorMessage";
import ActivityModal from "../components/ActivityModal";
import useAuth from "../hooks/useAuth";

const schema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
});

const LoginScreen = () => {
  const [user] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login, error } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();

    setLoading(true);
    await login({ email, password });
    setLoading(false);
  };

  return (
    <>
      <ActivityModal visible={loading} />

      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.keyboardOffSet}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 75}
        >
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          {error && (
            <View style={styles.errorLabel}>
              <ErrorMessage message="Invalid email and/or password." />
            </View>
          )}
          <Form
            initialValues={user}
            validationSchema={schema}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            <InputForm
              name="email"
              icon="envelope"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <InputForm
              name="password"
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <SubmitForm title="Login" />
          </Form>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 340,
    width: "92.5%",
    marginHorizontal: 17,
    justifyContent: "flex-start",
    paddingTop: 180,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "absolute",
    top: -125,
  },
  errorLabel: {
    alignItems: "center",
  },
});

export default LoginScreen;
