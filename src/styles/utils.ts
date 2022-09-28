const getStyles = (
  theme: string | null | undefined,
  styles: any,
  darkMode: any,
) => (theme === 'light' ? styles : darkMode);

export default getStyles;
