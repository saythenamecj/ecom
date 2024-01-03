import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const inputOptions = {
  style: inputStyling,
  model: "outlined",
  activeOutlineColor: colors.color3,
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Login success!");
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color4 }}>
        <View
          style={{
            marginBottom: 40,
          }}
        >
          <View style={styles.heading}>
            <Text style={styles.LoginStyle}>Login</Text>
          </View>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forgettext}>Forget Password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color1}
            disabled={email === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            Log In
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 70,

    borderRadius: 7,
    backgroundColor: colors.color2,
    color: colors.color4,
    padding: 5,
  },

  LoginStyle: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    color: colors.color4,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color2,
    color: colors.color4,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  forgettext: {
    color: colors.color4,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },

  btn: {
    backgroundColor: colors.color3,
    margin: 20,
    padding: 10,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color4,
  },
  link: {
    color: colors.color4,
    alignSelf: "center",
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default Login;
