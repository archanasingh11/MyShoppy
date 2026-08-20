import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./SectionHeader.styles";
import { Ionicons } from "@expo/vector-icons";

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
  showSeeAll?: boolean;
}

export default function SectionHeader({
  title,
  onSeeAll,
  showSeeAll = true,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {showSeeAll && (
        <Pressable style={styles.seeAllContainer} onPress={onSeeAll} hitSlop={10}>
        <Text style={styles.seeAll}>See All</Text>

        <Ionicons name="chevron-forward" size={16} color="#487880" />
      </Pressable>
      )}
    </View>
  );
}
