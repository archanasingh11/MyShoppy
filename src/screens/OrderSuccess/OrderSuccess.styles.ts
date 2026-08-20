import { StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: SPACING.lg,
    alignItems: "center",
    paddingBottom: 40,
  },

  iconContainer: {
    marginTop: 10,
    marginBottom: 8,
  },

  title: {
    ...TYPOGRAPHY.heading,
    color: COLORS.textPrimary,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: SPACING.lg,
    paddingHorizontal: 12,
  },

  card: {
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: SPACING.xl,
  },

  cardHeader: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0C3B24",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 14,
    color: "#6B7280",
    width: "35%",
  },

  infoVal: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2937",
    width: "65%",
    textAlign: "right",
  },

  infoValHighlight: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0C3B24",
    width: "65%",
    textAlign: "right",
  },

  infoValBold: {
    fontSize: 16,
    fontWeight: "700",
    color: "#059669",
    width: "65%",
    textAlign: "right",
  },

  addressText: {
    lineHeight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  btnWrapper: {
    width: "100%",
  },
});