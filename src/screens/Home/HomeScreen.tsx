import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import AppHeader from "../../components/AppHeader/AppHeader";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchBar from "../../components/SearchBar/SearchBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import LoadingState from "../../components/LoadingState/LoadingState";

import { CATEGORIES } from "../../constants/categories";
import { productApi } from "../../api";
import { Product } from "../../types";
import { styles } from "./Home.style";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [featured, popular] = await Promise.all([
          productApi.getFeatured(),
          productApi.getPopular(),
        ]);
        setFeaturedProducts(featured);
        setPopularProducts(popular);
      } catch (err) {
        console.log("Failed to load home products", err);
      } finally {
        setLoading(false);
      }
    }
    loadHomeData();
  }, []);

  const handleSearchSubmit = () => {
    if (search.trim()) {
      navigation.navigate("Products", { label: "Search Results", searchQuery: search });
    }
  };

  const handleCategoryPress = (slug: string, title: string) => {
    navigation.navigate("Products", { category: slug, label: title });
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate("ProductDetails", { productId: product.id });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <AppHeader centered />

        <View style={styles.searchSection}>
          <SearchBar
            value={search}
            placeholder="Search household products..."
            onChangeText={setSearch}
            onSubmitEditing={handleSearchSubmit}
          />
        </View>

        <HeroBanner onPress={() => navigation.navigate("Products", { label: "All Products" })} />

        {/* Quick Categories Bar */}
        <SectionHeader
          title="Browse Categories"
          onSeeAll={() => navigation.navigate("Categories")}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat.id}
              style={styles.categoryPill}
              onPress={() => handleCategoryPress(cat.slug, cat.title)}
            >
              <Text style={styles.categoryPillIcon}>{cat.icon || "📦"}</Text>
              <Text style={styles.categoryPillText}>{cat.title}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Featured Products */}
        <SectionHeader
          title="Featured Products"
          onSeeAll={() => navigation.navigate("Products", { label: "Featured Products" })}
        />
        {loading ? (
          <LoadingState message="Loading products..." />
        ) : (
          <View style={styles.gridContainer}>
            {featuredProducts.slice(0, 4).map((item) => (
              <View key={item.id} style={styles.gridItem}>
                <ProductCard product={item} onPress={() => handleProductPress(item)} />
              </View>
            ))}
          </View>
        )}

        {/* Popular Items */}
        <SectionHeader
          title="Popular Choices"
          onSeeAll={() => navigation.navigate("Products", { label: "Popular Choices" })}
        />
        {!loading && (
          <View style={styles.gridContainer}>
            {popularProducts.slice(0, 4).map((item) => (
              <View key={item.id} style={styles.gridItem}>
                <ProductCard product={item} onPress={() => handleProductPress(item)} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

