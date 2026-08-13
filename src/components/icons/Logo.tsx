import {Text, View} from 'react-native'
import {Image} from 'expo-image'

import {useTheme} from '#/alf'
import {type Props, sizes} from './common'

// assets/images/advay-logo-mark.png is 862x721
const markRatio = 721 / 862

function resolveSize(props: Pick<Props, 'size'> & {width?: unknown}) {
  return Number(
    props.size ? sizes[props.size] : (props.width as number) || sizes.md,
  )
}

export function Mark(
  props: Omit<Props, 'fill' | 'gradient'> & {width?: number},
) {
  const size = resolveSize(props)
  return (
    <Image
      source={require('../../../assets/images/advay-logo-mark.png')}
      accessibilityLabel="ADVAY"
      accessibilityHint=""
      accessibilityIgnoresInvertColors
      contentFit="contain"
      style={
        [
          {width: size, height: size * markRatio},
          props.style,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any
      }
    />
  )
}

export function Full(
  props: Omit<Props, 'fill' | 'size' | 'height'> & {
    markFill?: Props['fill']
    textFill?: Props['fill']
    width?: number
  },
) {
  const t = useTheme()
  const size = resolveSize(props)
  const markSize = size * 0.36
  const fontSize = size * 0.17

  return (
    <View
      style={[
        {flexDirection: 'row', alignItems: 'center', gap: size * 0.03},
        props.style,
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
        // @ts-ignore color type, fiiiiine
        style={{
          fontSize,
          fontWeight: '800',
          letterSpacing: fontSize * 0.02,
          color: props.textFill ?? t.atoms.text.color,
        }}>
        ADVAY
      </Text>
    </View>
  )
}
