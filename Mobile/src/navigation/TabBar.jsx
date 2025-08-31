import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "styles/theme";

import HomeScreen from "screens/HomeScreen";
import PropertiesScreen from "screens/PropertiesScreen";
import TransactionsScreen from "screens/TransactionsScreen";
import WalletScreen from "screens/WalletScreen";

const Tab = createBottomTabNavigator();

function TabBarIcon({ route, focused, color }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.3 : 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  const iconMap = {
    Home: focused ? "enter-sharp" : "home-outline",
    Properties: focused ? "business" : "business-outline",
    Transactions: focused ? "stats-chart" : "swap-horizontal-outline",
    Wallets: focused ? "wallet" : "wallet-outline",
  };

  const iconName = iconMap[route.name] || "ellipse";

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Icon
        name={iconName}
        size={focused ? 20 : 18}
        color={focused ? COLORS.primary : color}
        style={styles.icon}
      />
    </Animated.View>
  );
}

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.silver,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          paddingBottom: 6,
          height: 55,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_800ExtraBold",
          fontSize: 10,
          includeFontPadding: false,
        },
        headerTitleStyle: {
          fontFamily: "Roboto_900Black",
          fontSize: 14,
          color: COLORS.primary,
          includeFontPadding: false,
        },
        tabBarAllowFontScaling: false,
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              borderTopWidth: 0.5,
              borderTopColor: COLORS.primary,
            }}
          />
        ),
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon route={route} focused={focused} color={color} />
        ),
      })}
    >

      <Tab.Screen name="Wallets" component={WalletScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Properties" component={PropertiesScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -2,
  },
});