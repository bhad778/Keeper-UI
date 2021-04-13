import React from "react";
import { Text } from "react-native";

const AppText = (props) => {
  return (
    <Text numberOfLines={props.numberOfLines} style={[{ fontFamily: "app-default-font" }, props.style,props.numberOfLines]}>
      {props.children}
    </Text>
  );
};

export default AppText;
