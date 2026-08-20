import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 52,

    borderRadius: 14,

    backgroundColor: "#0C3B24",

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",

    shadowOpacity: 0.12,

    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  disabled: {
    opacity: 0.6,
  },

  icon: {
    marginRight: 8,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",
  },
});