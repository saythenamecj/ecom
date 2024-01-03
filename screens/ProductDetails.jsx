import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle, bsStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route: { params } }) => {
  console.log(params);

  const name = "Valve Carbs KeiHin ";
  const price = 199;
  const description =
    "Random ahh description here, dont worry the actual product description will be fetched from the database in atlas mongo db, this and the rest of the consts are just mock ups.";
  const [quantity, setQuantity] = useState(1);
  const stock = 10;
  const isCarousel = useRef(null);

  const images = [
    {
      id: "lol1",
      url: "https://lzd-img-global.slatic.net/g/p/85a90604b8743d2cf610fa7cd705c2b9.jpg_720x720q80.jpg",
    },
    {
      id: "lol2",
      url: "https://ph-test-11.slatic.net/p/7bbf105ea63ca9cc56ce292e3ea0f1f5.jpg",
    },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of stock.",
        text2: "Boy chill wala nang stock.",
      });
    Toast.show({
      type: "success",
      text1: "Added to cart.",
      text2: "iconfirm mo na boy",
    });
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color4,
      }}
    >
      <Header back={true} />

      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View
        style={{
          backgroundColor: colors.color3,
          padding: 35,
          flex: 1,
          marginTop: -250,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 30,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 900,
          }}
        >
          ₱{price}
        </Text>

        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color1,
              fontWeight: 200,
            }}
          >
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>
            <Text style={style.quantityStyle}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{}}
          activeOpacity={0.8}
          onPress={addToCartHandler}
        >
          <Button
            icon={"cart"}
            style={style.btnStyle}
            textColor={colors.color4}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color4,
    width: ITEM_WIDTH,
    paddingVertical: 150,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantityStyle: {
    backgroundColor: colors.color3,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btnStyle: {
    backgroundColor: colors.color2,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
