import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";
import { pmiconOptions } from "../styles/styles";

const CartItem = ({
  name,
  amount,
  qty,
  stock,
  index,
  imgSrc,
  id,
  decrementHandler,
  incrementHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 15,
        marginHorizontal: -20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color3 : colors.color1,

          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,

          paddingLeft: -10,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 1,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            left: 20,
          }}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: "900",
            left: 20,
          }}
        >
          ₱{amount}
        </Text>
      </View>
      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon
            icon={"minus"}
            size={22}
            style={{
              ...pmiconOptions,
              backgroundColor: colors.color7,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
          <Avatar.Icon
            icon={"plus"}
            size={22}
            style={{
              ...pmiconOptions,
              backgroundColor: colors.color7,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: "90%",
    resizeMode: "contain",
    top: "-10%",
    left: "10%",
  },
  qtyText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color7,
  },
  qtyContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default CartItem;
