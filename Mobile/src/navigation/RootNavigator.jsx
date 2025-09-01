import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";

import AddWallet from "screens/Wallet/AddWallet";
import Withdraw from "screens/Wallet/Withdraw";
import MyBills from "screens/Wallet/MyBills";
import SignIn from "../screens/Auth/SignIn";


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="MainTabs" component={TabBar} />

      {/* Wallet-related stack pages (NO tabs) */}
      <Stack.Screen name="AddWallet" component={AddWallet} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="MyBills" component={MyBills} />

    </Stack.Navigator>
  );
}