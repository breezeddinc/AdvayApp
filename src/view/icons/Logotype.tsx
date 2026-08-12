import {Text} from 'react-native'
import {type SvgProps} from 'react-native-svg'

import {useTheme} from '#/alf'

export function Logotype({
  fill,
  ...rest
}: {fill?: string} & SvgProps) {
  const t = useTheme()
  // @ts-ignore it's fiiiiine
  const width = Number(rest.width || 64)
  // approximates the on-screen width "ADVAY" occupies at a given font size,
  // so this remains a reasonable drop-in replacement for the old fixed-width SVG wordmark
  const fontSize = width / 2.7

  return (
    <Text
      accessibilityLabel="ADVAY"
      accessibilityHint=""
      numberOfLines={1}
      // @ts-ignore style type mismatch between SvgProps and Text, fiiiiine
      style={[
        {
          fontSize,
          lineHeight: fontSize * 1.1,
          fontWeight: '800',
          letterSpacing: fontSize * 0.02,
          color: fill || t.atoms.text.color,
        },
        rest.style,
      ]}>
      ADVAY
    </Text>
  )
}
