import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors, bsStyle } from "../styles/styles";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          ...bsStyle,
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: "80%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color1 : colors.color4,
              fontSize: 25,
              fontWeight: "400",
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color1 : colors.color4,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            ₱{price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            width: "100%",
          }}
        >
          <Button
            style={{
              borderRadius: 0,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => addToCartHandler(id, stock)}
            textColor={i % 2 === 0 ? colors.color4 : colors.color2}
          >
            Add to Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
