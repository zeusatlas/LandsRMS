import React from "react";
import { View,} from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import Label from "../components/Controls/Label";

export default function PropertiesScreen() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Label style={GLOBAL_STYLES.title}>Properties</Label>
      <Label >List of Properties will appear here</Label>
    </View>
  );
}
