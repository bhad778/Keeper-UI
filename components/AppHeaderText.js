import React from "react";
import { Text } from "react-native";

const AppHeaderText = (props) => {
  return (
    <Text style={[{ fontFamily: "app-header-font" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppHeaderText;
