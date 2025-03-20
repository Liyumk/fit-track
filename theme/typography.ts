export const typography = {
  size: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 22,
    '2xl': 28,
    '3xl': 34,
  },

  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  tracking: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
  },
} as const;

export type Typography = typeof typography;

export type FontSizePath = keyof typeof typography.size;

export const getFontSize = (size: FontSizePath): number => {
  return typography.size[size];
};
