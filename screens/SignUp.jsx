import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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
import { Avatar } from "react-native-paper/";
import { defaultAvatar } from "../styles/styles";

const SignUp = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disabledBtn =
    !name ||
    !email ||
    !password ||
    !address ||
    !city ||
    !country ||
    !country ||
    !pinCode;

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
            <Text style={styles.LoginStyle}>SignUp</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color2,
          }}
        >
          <View style={{ minHeight: 850 }}>
            <Avatar.Image
              style={{
                alignSelf: "center",
                backgroundColor: colors.color3,
                margin: 10,
              }}
              size={80}
              source={{ uri: avatar ? avatar : defaultAvatar }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color3}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              keyboardType="email-address"
              onChangeText={setName}
            />
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
              secureTextEntry="true"
              onChangeText={setPassword}
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
              loading={loading}
              textColor={colors.color1}
              disabled={disabledBtn}
              style={styles.btn}
              onPress={submitHandler}
            >
              Sign Up
            </Button>

            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
