import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, colorsdark, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigate = useNavigation();
  const itemsPrice = 3000;
  const ShippingCharges = 100;
  const tax = 0.11 * itemsPrice;
  const totalAmount = itemsPrice + ShippingCharges + tax;
  return (
    <View style={defaultStyle}>
      <Header back={true} />

      {/* heading */}

      <View
        style={{
          paddingTop: 100,
          paddingLeft: 20,
        }}
      >
        <Heading text1="Confirm" text2="Order" />
      </View>

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          paddingBottom: 30,
        }}
      >
        <PriceTag heading={"Subtotal"} value={itemsPrice} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Shipping Charges"} value={ShippingCharges} />
        <PriceTag heading={"Total"} value={totalAmount} />
        <TouchableOpacity
          onPress={() =>
            navigate.navigate(
              "payment",
              itemsPrice,
              tax,
              ShippingCharges,
              totalAmount
            )
          }
        >
          <Button
            style={{
              backgroundColor: colors.color2,
              borderRadius: 100,
              padding: 5,
              margin: 20,
            }}
            textColor={colors.color4}
            icon={"chevron-right"}
          >
            Payment
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{heading}</Text>
    <Text>₱{value}</Text>
  </View>
);

export default ConfirmOrder;
