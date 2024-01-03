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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Password Reset Success!");
    // will remove this in the future;
    navigation.navigate("login");
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
            <Text style={styles.LoginStyle}>Reset Password</Text>
          </View>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            value={otp}
            keyboardType="number-pad"
            onChangeText={setOtp}
          />

          <TextInput
            {...inputOptions}
            placeholder="New Password"
            value={password}
            secureTextEntry="true"
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            textColor={colors.color1}
            disabled={otp === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            Reset
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
