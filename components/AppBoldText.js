import React from "react";
import { Text } from "react-native";

const AppBoldText = (props) => {
  return (
    <AppBoldText>
      <Text style={{ fontSize: 20, fontStyle: "app-bold-font" }}>
        {props.children}
      </Text>
    </AppBoldText>
  );
};

export default AppBoldText;
