import React from "react";
import {
  View,
  TextInput,
  Pressable,
  KeyboardTypeOptions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./SearchBar.styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  onSubmitEditing?: () => void;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search products...",
  onClear,
  onSubmitEditing,
  editable = true,
  keyboardType = "default",
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color="#7A7A7A"
        style={styles.searchIcon}
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
      />


      {value.length > 0 && (
        <Pressable
          onPress={() => {
            if (onClear) {
              onClear();
            }
            onChangeText("");
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="close-circle"
            size={22}
            color="#9CA3AF"
          />
        </Pressable>
      )}

    </View>
  );
}