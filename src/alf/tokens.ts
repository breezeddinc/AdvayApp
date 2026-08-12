import {tokens} from '@bsky.app/alf'

export * from '@bsky.app/alf/dist/tokens'

export const color = {
  temp_purple: tokens.labelerColor.purple,
  temp_purple_dark: tokens.labelerColor.purple_dark,
} as const

/**
 * ADVAY brand palette.
 *
 * - `heading` is applied to `H1`-`H6` and screen/header titles.
 * - `primary` is a full shade scale that replaces the app's interactive
 *   ("clickable") brand color — buttons, links, active states, badges,
 *   etc. — anywhere `palette.primary_*` is referenced.
 *
 * See `#/alf/themes` for where these are applied.
 */
export const advayHeadingColor = '#C2410C'

export const advayPrimaryGreen = {
  primary_25: '#F3FCF6',
  primary_50: '#E3F8E9',
  primary_100: '#C3F0D0',
  primary_200: '#93E2AA',
  primary_300: '#5FCE82',
  primary_400: '#34B563',
  primary_500: '#189A4A',
  primary_600: '#117D3B',
  primary_700: '#0D642F',
  primary_800: '#0A4E25',
  primary_900: '#083D1D',
  primary_950: '#052711',
  primary_975: '#03190B',
} as const

export const gradients = {
  primary: {
    values: [
      [0, '#0A4E25'],
      [0.4, '#117D3B'],
      [0.6, '#117D3B'],
      [1, '#5FCE82'],
    ],
    hover_value: '#117D3B',
  },
  sky: {
    values: [
      [0, '#0A7AFF'],
      [1, '#59B9FF'],
    ],
    hover_value: '#0A7AFF',
  },
  midnight: {
    values: [
      [0, '#022C5E'],
      [1, '#4079BC'],
    ],
    hover_value: '#022C5E',
  },
  sunrise: {
    values: [
      [0, '#4E90AE'],
      [0.4, '#AEA3AB'],
      [0.8, '#E6A98F'],
      [1, '#F3A84C'],
    ],
    hover_value: '#AEA3AB',
  },
  sunset: {
    values: [
      [0, '#6772AF'],
      [0.6, '#B88BB6'],
      [1, '#FFA6AC'],
    ],
    hover_value: '#B88BB6',
  },
  summer: {
    values: [
      [0, '#FF6A56'],
      [0.3, '#FF9156'],
      [1, '#FFDD87'],
    ],
    hover_value: '#FF9156',
  },
  nordic: {
    values: [
      [0, '#083367'],
      [1, '#9EE8C1'],
    ],
    hover_value: '#3A7085',
  },
  bonfire: {
    values: [
      [0, '#203E4E'],
      [0.4, '#755B62'],
      [0.8, '#CD7765'],
      [1, '#EF956E'],
    ],
    hover_value: '#755B62',
  },
} as const
