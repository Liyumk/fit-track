import { colors } from './colors';
import { typography } from './typography';

export const theme = {
  extend: {
    colors: {
      ...colors,
      primary: colors.primary.main,
      secondary: colors.gray[500],
      background: colors.background.default,
      surface: colors.background.paper,
      border: colors.border.default,
      text: colors.text.primary,
    },
    fontSize: typography.size,
    fontWeight: typography.weight,
    lineHeight: typography.leading,
    letterSpacing: typography.tracking,
  },
} as const;
