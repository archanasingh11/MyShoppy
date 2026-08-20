import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  searchSection: {
    marginVertical: 8,
  },

  categoriesScroll: {
    paddingVertical: 8,
    gap: 10,
  },

  categoryPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  categoryPillIcon: {
    fontSize: 16,
  },

  categoryPillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0C3B24",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },

  gridItem: {
    width: "48%",
    marginBottom: 16,
  },
});