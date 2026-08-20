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

  breadcrumbContainer: {
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },

  breadcrumb: {
    ...TYPOGRAPHY.title,
    color: COLORS.textPrimary,
  },

  count: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  searchContainer: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xs,
  },

  filterScrollContainer: {
    marginBottom: SPACING.md,
  },

  filterScroll: {
    paddingHorizontal: SPACING.lg,
    gap: 8,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  chipActive: {
    backgroundColor: "#0C3B24",
    borderColor: "#0C3B24",
  },

  chipText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
  },

  chipTextActive: {
    color: "#FFFFFF",
  },


  list: {
    paddingHorizontal: SPACING.md,
    paddingBottom: 30,
  },

  row: {
    justifyContent: "space-between",
  },

  cardWrapper: {
    flex: 1,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  emptyTitle: {
    ...TYPOGRAPHY.bodySemiBold,
    color: COLORS.textPrimary,
  },

  emptySubtitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 8,
  },
});