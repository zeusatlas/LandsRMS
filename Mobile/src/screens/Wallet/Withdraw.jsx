import React from "react";
import { View, Text } from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import HeaderBar from "components/HeaderBar";

export default function Withdraw() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title="Cash Balance To Withdraw" />
      <View style={GLOBAL_STYLES.centered}>
        <Text style={GLOBAL_STYLES.text}>Withdraw funds here</Text>
      </View>
    </View>
  );
}
