import { StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingBottom: 40,
    alignItems: "center",
  },

  mainWrapper: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: "#FFFFFF",
  },

  imageWrapper: {
    width: "100%",
    height: 350,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
    lineHeight: 28,
  },

  brand: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 12,
    fontWeight: "500",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  categoryTag: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0C3B24",
    backgroundColor: "#E6F4EA",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    overflow: "hidden",
  },

  rating: {
    fontSize: 14,
    fontWeight: "700",
    color: "#D97706",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 12,
  },

  price: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.primary,
  },

  discountBadge: {
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  discountText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "700",
  },

  stockText: {
    fontSize: 14,
    color: "#059669",
    fontWeight: "600",
    marginBottom: 20,
  },

  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 24,
    marginBottom: 28,
  },

  actionContainer: {
    marginTop: 10,
    alignItems: "stretch",
  },
});
