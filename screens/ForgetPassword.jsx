import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Email sent.");
    // will remove this in the future;
    navigation.navigate("verify");
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color4 }}>
        <View
          style={{
            marginBottom: 40,
          }}
        >
          <View style={formHeading}>
            <Text style={styles.LoginStyle}>Get OTP</Text>
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

          <Button
            loading={loading}
            textColor={colors.color1}
            disabled={email === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            Confirm Email
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
