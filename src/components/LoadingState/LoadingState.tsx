import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { COLORS } from "../../theme";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message }: LoadingStateProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ActivityIndicator size="large" color={COLORS.primary} />
      {message ? (
        <Text style={{ marginTop: 12, fontSize: 14, color: "#6B7280" }}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}