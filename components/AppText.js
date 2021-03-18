import React from "react";
import { Text } from "react-native";

const AppText = (props) => {
  return (
    <Text style={[{ fontFamily: "app-default-font" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppText;
