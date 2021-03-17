import React from "react";
import { Text } from "react-native";

const AppText = (props) => {
  return (
    <AppText>
      <Text style={{ fontSize: 20, fontStyle: "app-default-font" }}>
        {props.children}
      </Text>
    </AppText>
  );
};

export default AppText;
