import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button, RadioButton } from "react-native-paper";
import { useState } from "react";

const Payment = ({ navigation, route }) => {
  const [PaymentMethod, SetPaymentMethod] = useState("COD");

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {};
  const onlinehandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ paddingTop: 100, paddingLeft: 20 }}>
        <Heading text1="Payment" text2="Method" />
      </View>

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={SetPaymentMethod}
          value={PaymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
            <RadioButton.Android color={colors.color3} value={"COD"} />
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Online Payment</Text>
            <RadioButton.Android color={colors.color3} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : PaymentMethod === "COD"
            ? codHandler
            : onlinehandler
        }
      >
        <Button
          style={styles.btn}
          textColor={colors.color4}
          icon={
            PaymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
        >
          {PaymentMethod === "COD" ? "Place Order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    padding: 30,
    borderRadius: 15,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color4,
  },
  btn: {
    backgroundColor: colors.color2,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});
export default Payment;
