import React, { useCallback } from "react";
import {
  FlatList,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import AppHeader from "../../components/AppHeader/AppHeader";
import CategoryCard from "../../components/CategoryCard/CategoryCard";



import {
  CATEGORIES,
  UICategory,
} from "../../constants/categories";

import { styles } from "./Categories.style";

export default function CategoriesScreen() {
  const navigation = useNavigation<any>();

  const handleCategoryPress = useCallback(
    (category: UICategory) => {
      navigation.navigate("Products", {
        category: category.slug,
        label: category.title,
      });
    },
    [navigation]
  );

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <AppHeader />

      <View style={styles.header}>
        <Text style={styles.heading}>
          Categories
        </Text>
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CategoryCard
              title={item.title}
              image={item.image}
              icon={item.icon}
              onPress={() => handleCategoryPress(item)}
            />
          </View>
        )}

      />
    </SafeAreaView>
  );
}