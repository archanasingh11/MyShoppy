import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./PrimaryButton.styles";

interface PrimaryButtonProps {
  title: string;

  onPress: () => void;

  loading?: boolean;

  disabled?: boolean;

  icon?: keyof typeof Ionicons.glyphMap;

  style?: ViewStyle;
}

export default function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  icon,
  style,
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <>
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
          )}

          <Text style={styles.title}>
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
}