import {
  createThemes,
  DEFAULT_PALETTE,
  DEFAULT_SUBDUED_PALETTE,
  type Theme,
} from '@bsky.app/alf'

import {advayPrimaryGreen} from '#/alf/tokens'

const DEFAULT_THEMES = createThemes({
  defaultPalette: DEFAULT_PALETTE,
  subduedPalette: DEFAULT_SUBDUED_PALETTE,
})

/**
 * Applies the ADVAY brand colors on top of the generated theme.
 *
 * We override the *output* of `createThemes()` rather than the palette it's
 * generated from, since the shade-scale generation algorithm lives in the
 * external `@bsky.app/alf` package. This keeps every other derived value
 * (shadows, disabled states, contrast scale, etc.) intact and only swaps
 * the specific colors that make up the brand's "clickable" and "background"
 * roles.
 *
 * `whiteBg` is only applied to the light theme — forcing a white
 * background onto the dark/dim themes would defeat the point of dark mode,
 * so those keep their existing dark backgrounds and only pick up the new
 * green interactive color.
 */
function applyAdvayBrand(theme: Theme, {whiteBg}: {whiteBg: boolean}): Theme {
  return {
    ...theme,
    palette: {
      ...theme.palette,
      ...advayPrimaryGreen,
    },
    atoms: {
      ...theme.atoms,
      ...(whiteBg
        ? {bg: {...theme.atoms.bg, backgroundColor: '#FFFFFF'}}
        : null),
      text_link: {...theme.atoms.text_link, color: advayPrimaryGreen.primary_500},
    },
  }
}

const ADVAY_THEMES = {
  light: applyAdvayBrand(DEFAULT_THEMES.light, {whiteBg: true}),
  dark: applyAdvayBrand(DEFAULT_THEMES.dark, {whiteBg: false}),
  dim: applyAdvayBrand(DEFAULT_THEMES.dim, {whiteBg: false}),
}

export const themes = {
  lightPalette: ADVAY_THEMES.light.palette,
  darkPalette: ADVAY_THEMES.dark.palette,
  dimPalette: ADVAY_THEMES.dim.palette,
  light: ADVAY_THEMES.light,
  dark: ADVAY_THEMES.dark,
  dim: ADVAY_THEMES.dim,
}

/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const lightPalette = ADVAY_THEMES.light.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const darkPalette = ADVAY_THEMES.dark.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const dimPalette = ADVAY_THEMES.dim.palette
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const light = ADVAY_THEMES.light
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const dark = ADVAY_THEMES.dark
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const dim = ADVAY_THEMES.dim
