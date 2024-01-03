import {
  View,
  Text,
  Opacity,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper/";
import { defaultStyle, colors, bsStyle } from "../styles/styles";
import Header from "../components/Header";
import { useState } from "react";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Parts", _id: "info1" },
  { category: "Accessories", _id: "info2" },
  { category: "Stickers", _id: "info3" },
  { category: "Liquids", _id: "info4" },
  { category: "Decorations", _id: "info5" },
  { category: "Clothing", _id: "info6" },
];

const products = [
  {
    price: 199,
    stock: 10,
    name: "Sample 1",
    _id: "1",
    images: [
      {
        url: "https://lzd-img-global.slatic.net/g/p/85a90604b8743d2cf610fa7cd705c2b9.jpg_720x720q80.jpg",
      },
    ],
  },

  {
    price: 59,
    stock: 5,
    name: "Sample 2",
    _id: "2",
    images: [
      {
        url: "https://ph-test-11.slatic.net/p/7bbf105ea63ca9cc56ce292e3ea0f1f5.jpg",
      },
    ],
  },

  {
    price: 229,
    stock: 1,
    name: "Sample 3",
    _id: "3",
    images: [
      {
        url: "https://lzd-img-global.slatic.net/g/ff/kf/Sedbfc802e1e44dca941778811823fc31l.jpg_720x720q80.jpg",
      },
    ],
  },

  {
    price: 119,
    stock: 20,
    name: "Sample 4",
    _id: "4",
    images: [
      {
        url: "https://lzd-img-global.slatic.net/g/p/cc805ad4d948490b2e700bf3836bc7fa.png_720x720q80.png",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");

  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const navigate = useNavigation();

  const addToCartHandler = (id) => {
    console.log("Add to cart", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defaultStyle}>
        {/* Header */}
        <Header />

        {/* Heading Row */}

        <View
          style={{
            paddingTop: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          {/* Heading */}

          <Heading text1="Boss B's" text2="Products" />

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{
                  backgroundColor: colors.color4,
                  elevation: 12,
                  ...bsStyle,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color3 : colors.color2,
                  borderRadius: 40,
                  margin: 3,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      category === item._id ? colors.color1 : colors.color4,
                    fontWeight: "bold",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/*    Products    */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
