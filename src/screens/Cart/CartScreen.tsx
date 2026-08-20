import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import AppHeader from "../../components/AppHeader/AppHeader";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import CartControls from "../../components/CartsControls/CartControls";

import { useCart } from "../../context/CartContext";
import { styles } from "./Cart.styles";

export default function CartScreen() {
  const navigation = useNavigation<any>();

  const {
    cart,
    removeFromCart,
    subtotal,
  } = useCart();

  const deliveryCharge = cart.length > 0 ? 49 : 0;
  const total = subtotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <AppHeader title="My Cart" />

        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color="#9CA3AF" />

          <Text style={styles.emptyTitle}>Your Cart is Empty</Text>

          <Text style={styles.emptySubtitle}>
            Add items to your shopping cart to continue.
          </Text>

          <PrimaryButton
            title="Start Shopping"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppHeader title="My Cart" />

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const imgSource = typeof item.image === "number" || typeof item.image === "object"
            ? item.image
            : { uri: item.thumbnail || item.image };

          return (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={imgSource} style={styles.image} resizeMode="contain" />
              </View>

              <View style={styles.info}>
                <View style={styles.titleRow}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.name || item.title}
                  </Text>
                  <Pressable onPress={() => removeFromCart(item.id)} hitSlop={8}>
                    <Ionicons name="trash-outline" size={20} color="#EF4444" />
                  </Pressable>
                </View>

                <Text style={styles.brandText}>{item.brand}</Text>
                <Text style={styles.price}>₹{item.price}</Text>

                <View style={styles.controlsWrapper}>
                  <CartControls product={item} />
                </View>
              </View>
            </View>
          );

        }}
        ListFooterComponent={
          <View style={styles.summary}>
            <Text style={styles.summaryHeading}>Order Details</Text>

            <View style={styles.row}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryVal}>₹{subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryVal}>₹{deliveryCharge.toFixed(2)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalVal}>₹{total.toFixed(2)}</Text>
            </View>

            <PrimaryButton
              title="Proceed to Checkout"
              onPress={() => navigation.navigate("Checkout")}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
}