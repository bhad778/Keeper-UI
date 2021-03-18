import React from "react";
import { Text } from "react-native";

const AppBoldText = (props) => {
  return (
    <Text style={[{ fontFamily: "app-bold-font" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppBoldText;
