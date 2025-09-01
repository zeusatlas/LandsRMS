import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "styles/theme";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Label from "./Controls/Label";

const HEADER_HEIGHT = 55;

export default function HeaderBar({ title }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // Limit top padding to avoid huge space on iOS
  const topPadding = Platform.OS === "ios" ? Math.min(insets.top, 5) : 10;

  return (
    <View style={[ styles.container, { paddingTop: topPadding, height: HEADER_HEIGHT + topPadding }, ]} >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7} >
        <Icon name="arrow-back-circle-outline" size={26} color={COLORS.primary} />
      </TouchableOpacity>
      <Label style={styles.title}>{title}</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    // borderBottomWidth: 0.5,
    // borderBottomColor: COLORS.silver,
    paddingHorizontal: 20,
    height: HEADER_HEIGHT,
  },
  backBtn: {
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    color: COLORS.primary,
  },
});
