import React, { useState } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import AppHeader from "../../components/AppHeader/AppHeader";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import { useCart } from "../../context/CartContext";
import { styles } from "./Checkout.styles";

export default function CheckoutScreen() {
  const navigation = useNavigation<any>();

  const { cart, subtotal, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const delivery = subtotal > 0 ? 49 : 0;
  const grandTotal = subtotal + delivery;

  function placeOrder() {
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!address.trim() || address.trim().length < 5) {
      setErrorMsg("Please enter your complete delivery address.");
      return;
    }

    const orderId = "MS-" + Math.floor(100000 + Math.random() * 900000);
    const orderDetails = {
      orderId,
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      totalAmount: grandTotal,
      itemCount: cart.reduce((sum, i) => sum + i.quantity, 0),
    };

    clearCart();

    navigation.replace("OrderSuccess", { order: orderDetails });
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppHeader title="Checkout" showBack />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>Delivery Information</Text>

        {errorMsg ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{errorMsg}</Text>
          </View>
        ) : null}

        <TextInput
          style={styles.input}
          placeholder="Full Name *"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={(val) => {
            setName(val);
            if (errorMsg) setErrorMsg("");
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number *"
          placeholderTextColor="#9CA3AF"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={(val) => {
            setPhone(val);
            if (errorMsg) setErrorMsg("");
          }}
        />

        <TextInput
          style={[styles.input, styles.address]}
          placeholder="Complete Delivery Address *"
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={3}
          value={address}
          onChangeText={(val) => {
            setAddress(val);
            if (errorMsg) setErrorMsg("");
          }}
        />

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>₹{subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Delivery Charges</Text>
            <Text style={styles.value}>₹{delivery.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Payable</Text>
            <Text style={styles.totalValue}>₹{grandTotal.toFixed(2)}</Text>
          </View>
        </View>

        <PrimaryButton title="Confirm & Place Order" onPress={placeOrder} />
      </ScrollView>
    </SafeAreaView>
  );
}

