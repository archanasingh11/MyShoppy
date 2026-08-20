import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  backButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    marginRight: 4,
  },

  logo: {
    width: 130,
    height: 40,
  },

  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },

  centerLogo: {
    width: 170,
    height: 52,
  },

  centerSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },
});

