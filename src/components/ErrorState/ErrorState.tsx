import React from "react";
import {
  View,
  Text,
  Pressable,
} from "react-native";

import { COLORS, TYPOGRAPHY } from "../../theme";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      <Text
        style={[
          TYPOGRAPHY.body,
          {
            color: COLORS.danger,
            textAlign: "center",
            marginBottom: 20,
          },
        ]}
      >
        {message}
      </Text>

      {onRetry && (
        <Pressable
          onPress={onRetry}
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Retry
          </Text>
        </Pressable>
      )}
    </View>
  );
}