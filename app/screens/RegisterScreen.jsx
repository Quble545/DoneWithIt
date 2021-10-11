import React, { useState } from "react";
import * as Yup from "yup";
import { View, StyleSheet } from "react-native";

import { Form, InputForm, SubmitForm } from "../components/form";
import ErrorMessage from "../components/ErrorMessage";
import ActivityModal from "../components/ActivityModal";
import usersApi from "../api/users";
import useAuth from "../hooks/useAuth";

const schema = Yup.object({
  name: Yup.string().min(3).required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(5).required().label("Password"),
});

const RegisterScreen = () => {
  const [user] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async ({ name, email, password }) => {
    setLoading(true);
    const response = await usersApi.register({ name, email, password });
    setLoading(false);

    if (!response.ok) return setErrors(true);

    setErrors(false);
    login({ email: response.data.email, password: response.data.password });
  };

  return (
    <>
      <ActivityModal visible={loading} />
      <View style={styles.container}>
        {errors && (
          <View style={styles.errorLabel}>
            <ErrorMessage message="A user with the given email already exists." />
          </View>
        )}
        <Form
          initialValues={user}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <InputForm name="name" icon="user-alt" placeholder="Name" />
          <InputForm
            name="email"
            icon="envelope"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
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
          <SubmitForm title="Register" />
        </Form>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17,
    marginTop: 10,
  },
  errorLabel: {
    alignItems: "center",
  },
});

export default RegisterScreen;
