import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 220,
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C3B24",
  },

  placeholderIcon: {
    fontSize: 54,
  },

  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 28,
    paddingHorizontal: 12,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.38)",
  },

  overlayTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.4,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },

  selectedContainer: {
    borderColor: "#0C3B24",
    borderWidth: 3,
  },
});

