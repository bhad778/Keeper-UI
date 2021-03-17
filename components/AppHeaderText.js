import React from "react";
import { Text } from "react-native";

const AppHeaderText = (props) => {
  return (
    <Text style={{ fontSize: 20, fontStyle: "app-header-font" }}>
      {props.children}
    </Text>
  );
};

export default AppHeaderText;
