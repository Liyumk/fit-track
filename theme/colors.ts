export const colors = {
  white: '#FFFFFF',
  black: '#000000',

  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  primary: {
    main: '#FFE74C',
    light: '#FFF176',
    dark: '#FFC630',
  },

  text: {
    primary: '#000000',
    secondary: '#464B50',
    disabled: '#9CA3AF',
  },

  background: {
    default: '#f3f2f7',
    paper: '#F3F4F6',
    card: '#F9FAFB',
  },

  border: {
    light: '#F3F4F6',
    default: '#E5E7EB',
    dark: '#D1D5DB',
  },
} as const;

export type Colors = typeof colors;

export type ColorPath =
  | keyof typeof colors
  | `${keyof typeof colors}.${string}`
  | `${keyof typeof colors}.${string}.${string}`;

export const getColor = (path: ColorPath): string => {
  const parts = path.split('.');
  let result: any = colors;

  for (const part of parts) {
    result = result[part];
  }

  return result;
};
