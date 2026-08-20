import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import CartControls from "../CartsControls/CartControls";
import { styles } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
  showAddButton?: boolean;
  showFavorite?: boolean;
}

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
  showAddButton = true,
  showFavorite = true,
}: ProductCardProps) {
  const { getQuantity, addToCart } = useCart();
  const quantity = getQuantity ? getQuantity(product.id) : 0;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else if (addToCart) {
      addToCart(product);
    }
  };


  const imageSource = typeof product.image === "number" || typeof product.image === "object"
    ? product.image
    : { uri: product.thumbnail || product.image };

  return (
    <Pressable style={styles.container} onPress={() => onPress(product)}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />

        {showFavorite && (
          <Pressable
            style={styles.favoriteButton}
            onPress={() => onToggleFavorite?.(product)}
            hitSlop={8}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={18}
              color={isFavorite ? "#EF4444" : "#6B7280"}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name || product.title}
        </Text>

        <Text style={styles.brand}>{product.brand}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{product.price}</Text>

          {product.discount > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discount}>{product.discount}% OFF</Text>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
          <Text style={styles.stock}>{product.stock} left</Text>
        </View>

        {showAddButton && (
          <View style={styles.actionWrapper}>
            {quantity > 0 ? (
              <CartControls product={product} />
            ) : (
              <Pressable style={styles.cartButton} onPress={handleAddToCart}>
                <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
                <Text style={styles.cartText}>Add to Cart</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
}