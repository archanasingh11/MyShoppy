import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import AppHeader from "../../components/AppHeader/AppHeader";
import { useCart } from "../../context/CartContext";
import { styles } from "./OrderSuccess.styles";

export default function OrderSuccessScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { clearCart } = useCart();

  useEffect(() => {
    if (clearCart) {
      clearCart();
    }
  }, [clearCart]);


  const order = route.params?.order || {
    orderId: "MS-" + Math.floor(100000 + Math.random() * 900000),
    name: "Customer",
    phone: "",
    address: "Standard Delivery Address",
    totalAmount: 0,
    itemCount: 1,
  };

  const handleContinueShopping = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "CartMain" }],
    });
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppHeader title="Order Confirmation" />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={90} color="#22C55E" />
        </View>

        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.subtitle}>
          Thank you for shopping with MyShoppy. Your order has been confirmed.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Order Reference</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Order ID:</Text>
            <Text style={styles.infoValHighlight}>{order.orderId}</Text>
          </View>

          {order.name ? (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Recipient:</Text>
              <Text style={styles.infoVal}>{order.name}</Text>
            </View>
          ) : null}

          {order.address ? (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Deliver To:</Text>
              <Text style={[styles.infoVal, styles.addressText]}>{order.address}</Text>
            </View>
          ) : null}

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Items Count:</Text>
            <Text style={styles.infoVal}>{order.itemCount} item(s)</Text>
          </View>

          {order.totalAmount ? (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Total Paid:</Text>
              <Text style={styles.infoValBold}>₹{order.totalAmount.toFixed(2)}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.btnWrapper}>
          <PrimaryButton
            title="Continue Shopping"
            onPress={handleContinueShopping}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}