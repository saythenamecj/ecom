import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const Heading = ({ text1 = "Our", text2 = "Products", containerStyle }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: colors.color1,
          fontWeight: 900,
        }}
      >
        {text1}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: colors.color1,
          fontWeight: 500,
        }}
      >
        {text2}
      </Text>
    </View>
  );
};

export default Heading;
