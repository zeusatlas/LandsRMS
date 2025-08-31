// src/styles/theme.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#657F31",
  secondary: "#062750",
  tertiary: "#F6931E",
  white: "#FFFFFF",
  danger: '#F55271',
  success: '#59E16B',
  info: "#07C4D9",
  basic: "#0FD46C",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#666666",
  silver: '#B9B9B9',
  border1: "#E1E1E2",
  border4: '#ccc',
  border2: '#eee',
  border3: '#B1B1B1',
  grey: '#8D8D8D',

  ig_dark: '#121212',
  ig_darkL: '#262626',
  ig_deep: '#080808',
  ig_text: '#E8E9EB',

  fb_dark: '#1D1D1F',
  fb_darkL: '#333536',
  fb_text: '#C8C6C7',

  watsap_dark: '#111B21',
  watsap_darkL: '#202C33',
  transparent: 'transparent',
  whitesmoke: 'whitesmoke'
};

export const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
};

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
    gap: 4
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.medium,
    backgroundColor: COLORS.white,
    gap: 4
  },
  title: {
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
    color: COLORS.primary,
    marginBottom: SPACING.medium,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: COLORS.gray,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.medium,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.large,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: COLORS.white,
  },
});
