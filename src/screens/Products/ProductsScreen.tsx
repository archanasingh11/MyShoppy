import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl, Text, View, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import AppHeader from "../../components/AppHeader/AppHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";

import { productApi } from "../../api";
import { Product } from "../../types";
import { useCart } from "../../context/CartContext";

import { styles } from "./Products.styles";

export default function ProductsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { category = "", label = "Products", searchQuery = "" } = route.params || {};

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState(searchQuery);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "under500" | "instock" | "rated">("all");

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  const loadProducts = useCallback(async () => {
    try {
      setError("");

      let list: Product[] = [];
      if (category) {
        const response = await productApi.getByUICategory(category);
        list = Array.isArray(response) ? response : response.products || [];
      } else {
        const response = await productApi.getAll();
        list = Array.isArray(response) ? response : (response as any).products || [];
      }

      setProducts(list);
    } catch {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [category]);

  useEffect(() => {
    setSearch(searchQuery || "");
  }, [searchQuery]);

  useEffect(() => {
    setLoading(true);
    loadProducts();
  }, [loadProducts]);

  const onRefresh = () => {
    setRefreshing(true);
    loadProducts();
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const nameMatch =
        !search.trim() ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.brand && item.brand.toLowerCase().includes(search.toLowerCase())) ||
        (item.category && item.category.toLowerCase().includes(search.toLowerCase()));

      if (!nameMatch) return false;

      if (selectedFilter === "under500") {
        return item.price <= 500;
      }
      if (selectedFilter === "instock") {
        return item.stock > 0;
      }
      if (selectedFilter === "rated") {
        return item.rating >= 4.5;
      }

      return true;
    });
  }, [products, search, selectedFilter]);

  if (loading) {
    return <LoadingState message="Loading catalog..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadProducts} />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppHeader title={label} showBack />

      <View style={styles.breadcrumbContainer}>
        <Text style={styles.breadcrumb}>{category ? `Category / ${label}` : label}</Text>
        <Text style={styles.count}>{filteredProducts.length} Products</Text>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={`Search ${label}...`}
        />
      </View>

      {/* Filter Chips */}
      <View style={styles.filterScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
          <Pressable
            style={[styles.chip, selectedFilter === "all" && styles.chipActive]}
            onPress={() => setSelectedFilter("all")}
          >
            <Text style={[styles.chipText, selectedFilter === "all" && styles.chipTextActive]}>All Items</Text>
          </Pressable>

          <Pressable
            style={[styles.chip, selectedFilter === "under500" && styles.chipActive]}
            onPress={() => setSelectedFilter("under500")}
          >
            <Text style={[styles.chipText, selectedFilter === "under500" && styles.chipTextActive]}>Under ₹500</Text>
          </Pressable>

          <Pressable
            style={[styles.chip, selectedFilter === "instock" && styles.chipActive]}
            onPress={() => setSelectedFilter("instock")}
          >
            <Text style={[styles.chipText, selectedFilter === "instock" && styles.chipTextActive]}>In Stock</Text>
          </Pressable>

          <Pressable
            style={[styles.chip, selectedFilter === "rated" && styles.chipActive]}
            onPress={() => setSelectedFilter("rated")}
          >
            <Text style={[styles.chipText, selectedFilter === "rated" && styles.chipTextActive]}>⭐ 4.5+ Rating</Text>
          </Pressable>
        </ScrollView>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard
              product={item}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  productId: item.id,
                })
              }
            />

          </View>
        )}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No products found</Text>
            <Text style={styles.emptySubtitle}>Try adjusting your search or filter.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

