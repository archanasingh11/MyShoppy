import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const bannerHeight = Math.min(width * 0.46, 200);

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: bannerHeight,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 12,
    backgroundColor: "#0C3B24",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  image: {
    width: "100%",
    height: "100%",
    opacity: 0.75,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "center",
    backgroundColor: "rgba(12, 59, 36, 0.45)",
  },

  title: {
    color: "#FFFFFF",
    fontSize: Math.min(width * 0.055, 22),
    fontWeight: "700",
    maxWidth: "80%",
    lineHeight: Math.min(width * 0.07, 28),
  },

  subtitle: {
    color: "#E5E7EB",
    marginTop: 6,
    fontSize: Math.min(width * 0.035, 13),
    maxWidth: "85%",
    fontWeight: "500",
  },

  button: {
    marginTop: 12,
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  buttonText: {
    color: "#0C3B24",
    fontWeight: "700",
    fontSize: 13,
  },
});