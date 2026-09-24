import { useUniwind, useCSSVariable } from "uniwind";

export function useTheme() {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const [
    primary,
    primaryDark,
    primaryMuted,
    secondary,
    background,
    foreground,
    foregroundSecondary,
  ] = useCSSVariable([
    "--color-primary",
    "--color-primary-dark",
    "--color-primary-muted",
    "--color-secondary",
    "--color-background",
    "--color-foreground",
    "--color-foreground-secondary",
  ]);

  return {
    theme,
    hasAdaptiveThemes,
    colors: {
      primary,
      primaryDark,
      primaryMuted,
      secondary,
      background,
      foreground,
      foregroundSecondary,
    } as Record<string, string>,
  };
}
