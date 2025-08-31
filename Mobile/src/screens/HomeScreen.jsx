import React from "react";
import { View,} from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import Label from "../components/Controls/Label";

export default function HomeScreen() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Label style={GLOBAL_STYLES.title}>Home</Label>
      <Label >Welcome to the Home Page</Label>
    </View>
  );
}
