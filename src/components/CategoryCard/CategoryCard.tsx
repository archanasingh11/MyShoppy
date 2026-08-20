import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { Category } from "../../types";
import { styles } from "./CategoryCard.styles";

interface CategoryCardProps {
  category?: Category;
  title?: string;
  name?: string;
  image?: any;
  icon?: string;
  onPress?: (category?: any) => void;
  isSelected?: boolean;
}

export default function CategoryCard({
  category,
  title,
  name,
  image,
  icon,
  onPress,
  isSelected = false,
}: CategoryCardProps) {
  const displayTitle = title || name || category?.name || (category as any)?.title || "";
  const displayImage = image || category?.image;
  const displayIcon = icon || (category as any)?.icon || "📦";

  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => onPress?.(category)}
    >
      {displayImage ? (
        <Image
          source={typeof displayImage === "string" ? { uri: displayImage } : displayImage}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderIcon}>{displayIcon}</Text>
        </View>
      )}

      {/* Top overlay with category title matching wireframe */}
      <View style={styles.topOverlay}>
        <Text style={styles.overlayTitle} numberOfLines={1}>
          {displayTitle}
        </Text>
      </View>
    </Pressable>
  );
}



