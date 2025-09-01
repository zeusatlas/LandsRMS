// src/styles/theme.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// 
export const COLORS = {
  primary: "#657F31",
  secondary: "#2C374B",
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
    paddingTop: SPACING.medium,
    paddingBottom: 3,
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


  // TODO: CSS for the fab button
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    gap: 12,
    zIndex: 99,
  },
  fab: {
    backgroundColor: COLORS.secondary,
    width: 40,
    height: 40,
    borderRadius: 6,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    left: 8,
  },

  fabs: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 6,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },




  // TODO: CSS for the bottom sheet
  bottomSheetContent: {
    flex: 1,
    padding: 20,
    width: '100%'
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    zIndex: 1000,
  },

  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: -5
  },
  bottomSheetTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
    flex: 1,
    marginBottom: 5
  },
  closeButton: {
    paddingVertical: 2,
    marginBottom: 5
  },
  formContainer: {
    width: '100%',
    paddingVertical: 10,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 100
  },

  gradientView: {
    height: 280,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    letterSpacing: 6,
    marginBottom: 20,
  },

  appName: {
    fontSize: 36,
    fontFamily: "Exo2_900Black",
    color: COLORS.basic,
    marginBottom: -5,
    textTransform: 'uppercase',
    paddingTop: 5,
  },

  imgCard: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    // zIndex: 10,
    marginTop: 45
  },


  Vcard: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.primary,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },
  vLine: {
    width: 5,
    height: 50,
    backgroundColor: COLORS.primary,
    marginRight: 10,
    borderRadius: 10,
    marginLeft: -2,
  },
  VitemContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },



});
