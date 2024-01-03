import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Carburator",
    image:
      "https://lzd-img-global.slatic.net/g/p/85a90604b8743d2cf610fa7cd705c2b9.jpg_720x720q80.jpg",
    product: "Carburator 1",
    stock: 5,
    price: 199,
    quantity: 10,
  },
  {
    name: "CSL Seat Assembly x4",
    image:
      "https://lzd-img-global.slatic.net/g/ff/kf/Sedbfc802e1e44dca941778811823fc31l.jpg_720x720q80.jpg",
    product: "Seat Assembly x4",
    stock: 2,
    price: 229,
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {};

  const decrementHandler = (id, qty) => {};

  return (
    <View
      style={{
        ...defaultStyle,
        paddingLeft: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />
      {/* Headings */}
      <View
        style={{
          paddingTop: 100,
          paddingLeft: 20,
        }}
      >
        <Heading text1="Shopping" text2="Cart" />
      </View>

      {/* cart items */}

      <View
        style={{
          paddingVertical: 20,

          flex: 1,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingLeft: 0,
          }}
        >
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>₱199</Text>
      </View>

      {/* add to cart */}
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color2,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color4}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
