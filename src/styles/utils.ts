export const getStyle = (
  theme: string | null | undefined,
  styles: any,
  darkMode: any,
) => {
  return theme == 'light' ? styles : darkMode;
};
