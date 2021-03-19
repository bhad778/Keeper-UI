import React from "react";
import { Text } from "react-native";

const AppHeaderText = (props) => {
  return (
    <AppHeaderText>
      <Text style={{ fontSize: 20, fontStyle: "app-header-font" }}>
        {props.children}
      </Text>
    </AppHeaderText>
  );
};

export default AppHeaderText;
