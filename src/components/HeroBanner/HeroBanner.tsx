import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { styles } from "./HeroBanner.styles";

interface HeroBannerProps {
  onPress?: () => void;
}

export default function HeroBanner({
  onPress,
}: HeroBannerProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Image
        source={require("../../../assets/images/banner.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Everything You Need
        </Text>

        <Text style={styles.subtitle}>
          Kitchen • Cleaning • Decor • Storage
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Shop Now
          </Text>
        </View>
      </View>
    </Pressable>
  );
}