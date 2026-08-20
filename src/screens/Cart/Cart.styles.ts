import { StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
  SHADOW,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  list: {
    padding: SPACING.lg,
    paddingBottom: 40,
    maxWidth: 800,
    width: "100%",
    alignSelf: "center",
  },

  card: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    ...SHADOW.card,
  },

  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",

    alignItems: "center",
    padding: 4,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },


  info: {
    flex: 1,
    marginLeft: SPACING.md,
    justifyContent: "space-between",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    ...TYPOGRAPHY.bodySemiBold,
    color: COLORS.textPrimary,
    flex: 1,
    marginRight: 8,
  },

  brandText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
    marginVertical: 4,
  },

  controlsWrapper: {
    marginTop: 4,
    alignSelf: "flex-start",
  },

  summary: {
    marginTop: SPACING.md,
    padding: SPACING.lg,
    backgroundColor: "#F9FAFB",
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  summaryHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  summaryLabel: {
    fontSize: 14,
    color: "#4B5563",
  },

  summaryVal: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },

  totalVal: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.xl,
  },

  emptyTitle: {
    ...TYPOGRAPHY.heading,
    color: COLORS.textPrimary,
    marginTop: 16,
    marginBottom: SPACING.xs,
  },

  emptySubtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: SPACING.xl,
  },
});