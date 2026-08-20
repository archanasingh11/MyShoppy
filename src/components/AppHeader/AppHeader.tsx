import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./AppHeader.styles";

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  showBack?: boolean;
}

export default function AppHeader({
  title,
  subtitle,
  centered = false,
  showBack = false,
}: AppHeaderProps) {
  const navigation = useNavigation();

  // Centered main logo header (Home page)
  if (centered) {
    return (
      <View style={styles.centerContainer}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.centerLogo}
          resizeMode="contain"
        />
        {subtitle ? <Text style={styles.centerSubtitle}>{subtitle}</Text> : null}
      </View>
    );
  }

  // Brand logo on Top-Left side for ALL other screens
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        {showBack && (
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#0C3B24" />
          </Pressable>
        )}

        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}