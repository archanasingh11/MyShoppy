import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useCart } from "../../context/CartContext";
import { Product } from "../../types";
import { styles } from "./CartControls.styles";

interface CartControlsProps {
  quantity?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  product?: Product;
}

export default function CartControls({
  quantity,
  onIncrease,
  onDecrease,
  product,
}: CartControlsProps) {
  const cartContext = useCart();

  const currentQuantity = product
    ? cartContext.getQuantity(product.id)
    : quantity ?? 0;

  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease();
    } else if (product && cartContext.addToCart) {
      cartContext.addToCart(product);
    }
  };

  const handleDecrease = () => {
    if (onDecrease) {
      onDecrease();
    } else if (product && cartContext.decreaseQuantity) {
      cartContext.decreaseQuantity(product.id);
    }
  };

  if (currentQuantity === 0 && product) {
    return (
      <Pressable style={styles.addButton} onPress={handleIncrease}>
        <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconBtn}
        onPress={handleDecrease}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons name="remove-outline" size={18} color="#FFFFFF" />
      </Pressable>

      <View style={styles.quantityWrapper}>
        <Text style={styles.quantityText}>{currentQuantity}</Text>
      </View>

      <Pressable
        style={styles.iconBtn}
        onPress={handleIncrease}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons name="add-outline" size={18} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
