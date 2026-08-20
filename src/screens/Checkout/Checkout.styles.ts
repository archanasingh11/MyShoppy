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
    paddingBottom: 40,
  },

  heading: {
    ...TYPOGRAPHY.title,
    marginBottom: SPACING.md,
  },

  errorBanner: {
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
  },

  errorText: {
    color: "#DC2626",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.surface,
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  address: {
    height: 90,
    textAlignVertical: "top",
  },

  summary: {
    marginVertical: SPACING.lg,
    padding: SPACING.md,
    backgroundColor: "#F9FAFB",
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.sm,
  },

  label: {
    fontSize: 14,
    color: "#4B5563",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },

  totalValue: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
});