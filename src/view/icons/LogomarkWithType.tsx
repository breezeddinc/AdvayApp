import {Text, View} from 'react-native'
import {type SvgProps} from 'react-native-svg'
import {Image} from 'expo-image'

import {useTheme} from '#/alf'

// assets/images/advay-logo-mark.png is 862x721
const markRatio = 721 / 862

export function LogomarkWithType({
  fill,
  ...rest
}: {fill?: string} & SvgProps) {
  const t = useTheme()
  // @ts-ignore it's fiiiiine
  const width = Number(rest.width || 32)
  const markSize = width * 0.34
  const fontSize = width * 0.16

  return (
    <View
      // @ts-ignore style type mismatch between SvgProps and View, fiiiiine
      style={[
        {flexDirection: 'row', alignItems: 'center', gap: width * 0.03},
        rest.style,
      ]}>
      <Image
        source={require('../../../assets/images/advay-logo-mark.png')}
        accessibilityLabel=""
        accessibilityHint=""
        accessibilityIgnoresInvertColors
        contentFit="contain"
        style={{width: markSize, height: markSize * markRatio}}
      />
      <Text
        accessibilityLabel="ADVAY"
        accessibilityHint=""
        numberOfLines={1}
        style={{
          fontSize,
          fontWeight: '800',
          letterSpacing: fontSize * 0.02,
          color: fill || t.atoms.text.color,
        }}>
        ADVAY
      </Text>
    </View>
  )
}
