import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0C3B24",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 4,
    height: 38,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  iconBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityWrapper: {
    minWidth: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  quantityText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C3B24",
    height: 38,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
    elevation: 2,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});
