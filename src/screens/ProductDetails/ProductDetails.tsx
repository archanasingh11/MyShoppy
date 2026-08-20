import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import AppHeader from "../../components/AppHeader/AppHeader";
import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";
import CartControls from "../../components/CartsControls/CartControls";

import { productApi } from "../../api";
import { Product } from "../../types";

import { styles } from "./ProductDetails.styles";

export default function ProductDetailsScreen() {
  const route = useRoute<any>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      setLoading(true);
      const data = await productApi.getById(route.params.productId);
      if (data) {
        setProduct(data);
      } else {
        setError("Product not found");
      }
    } catch {
      setError("Unable to load product");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <LoadingState message="Loading details..." />;

  if (error) return <ErrorState message={error} onRetry={loadProduct} />;

  if (!product) return null;

  const imageSource = typeof product.image === "number" || typeof product.image === "object"
    ? product.image
    : { uri: product.thumbnail || product.image };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppHeader title="Product Details" showBack />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={imageSource}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{product.name || product.title}</Text>

            {product.brand && <Text style={styles.brand}>Brand: {product.brand}</Text>}

            <View style={styles.metaRow}>
              <Text style={styles.categoryTag}>{product.category.toUpperCase()}</Text>
              <Text style={styles.rating}>⭐ {product.rating}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.price}>₹{product.price}</Text>
              {product.discount > 0 && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{product.discount}% OFF</Text>
                </View>
              )}
            </View>

            <Text style={styles.stockText}>
              Status: {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
            </Text>

            <Text style={styles.sectionHeader}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.actionContainer}>
              <CartControls product={product} />
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

