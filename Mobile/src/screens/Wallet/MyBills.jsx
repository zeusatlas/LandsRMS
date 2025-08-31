import React from "react";
import { View, Text } from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import HeaderBar from "components/HeaderBar";

export default function MyBills() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title="Allocated Bills" />
      <View style={GLOBAL_STYLES.centered}>
        <Text style={GLOBAL_STYLES.text}>View and pay your bills here</Text>
      </View>
    </View>
  );
}
