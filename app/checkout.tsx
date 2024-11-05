import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import PriceTag from "@/components/checkout/PriceTag";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import Scrollable from "@/components/containers/Scrollable";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  return (
    <FullScreen center>
      {/* <HeaderHidden /> */}
      <HeaderWithTitle title="Checkout!" />
      <View style={styles.container}>
        <CheckoutButton onPress={handleCheckout} />
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
