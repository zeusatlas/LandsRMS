import React from "react";
import { View} from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import Label from "../components/Controls/Label";

export default function TransactionsScreen() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Label style={GLOBAL_STYLES.title}>Transactions</Label>
      <Label>Your Transactions will appear here</Label>
    </View>
  );
}
