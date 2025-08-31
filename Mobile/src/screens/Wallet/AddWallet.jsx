import React from "react";
import { View, Text } from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import HeaderBar from "components/HeaderBar";

export default function AddWallet() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar title="Adding New Wallet" />
      <View style={GLOBAL_STYLES.centered}>
        <Text style={GLOBAL_STYLES.text}>Add a new wallet here</Text>
      </View>
    </View>
  );
}
