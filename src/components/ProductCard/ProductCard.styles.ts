import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  imageContainer: {
    width: "100%",
    height: 140,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    height: 38,
  },

  brand: {
    marginTop: 2,
    fontSize: 12,
    color: "#6B7280",
  },

  priceRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0C3B24",
  },

  discountBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  discount: {
    fontSize: 10,
    fontWeight: "700",
    color: "#15803D",
  },

  footer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rating: {
    fontSize: 12,
    color: "#F59E0B",
    fontWeight: "600",
  },

  stock: {
    fontSize: 11,
    color: "#6B7280",
  },

  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  actionWrapper: {
    marginTop: 10,
    alignItems: "stretch",
  },

  cartButton: {
    backgroundColor: "#0C3B24",
    height: 38,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    marginLeft: 6,
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
});