import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { GLOBAL_STYLES } from "styles/theme";
import Label from "components/./Controls/Label";
import Button from "../components/Controls/Button";
import DTime from "../components/Controls/DTime";
import DDate from "../components/Controls/Date";
import TextArea from "../components/Controls/TextArea";

export default function WalletScreen() {
  const navigation = useNavigation();



  return (
    <View style={GLOBAL_STYLES.container}>
      <Label style={GLOBAL_STYLES.title}>Wallet</Label>
      <Label>Your wallet balance and actions</Label>


      <DTime label="Appointment Time" icon="time-outline" />
      <DDate label="Appointment Time" icon="time-outline" />
      <TextArea label="Short descriptions of the input" />

      <Button type="outline" title="Add Wallet" onPress={() => navigation.navigate("AddWallet")} />
      <Button title="Withdraw" icon="add-circle-outline" onPress={() => navigation.navigate("Withdraw")} />
      <Button title="My Bills" icon="chevron-forward" iconPosition="right" onPress={() => navigation.navigate("MyBills")} />



    </View>
  );
}
