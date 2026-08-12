import {forwardRef} from 'react'
import {type ImageStyle, type StyleProp} from 'react-native'
import {Image} from 'expo-image'

import {useLogoVariant} from '#/view/icons/useLogoVariant'
import {flatten} from '#/alf'

// assets/images/advay-logo-mark.png is 862x721
const ratio = 721 / 862

type Props = {
  allowVariants?: boolean
  /**
   * Accepted for backwards compatibility with existing call sites, but has
   * no effect: the ADVAY mark is a fixed multi-color image and can't be
   * tinted with a single fill color the way the old vector mark could.
   */
  fill?: string
  style?: StyleProp<ImageStyle>
  width?: number | string
  height?: number | string
}

export const Logo = forwardRef(function LogoImpl(props: Props, ref) {
  const {allowVariants = true, style, width, height} = props
  const styles = flatten(style)
  const size = parseInt(String(width || 32), 10)
  const explicitHeight = height != null ? parseInt(String(height), 10) : null

  const logoVariant = useLogoVariant(allowVariants)

  if (logoVariant !== 'default') {
    const isJapanLogo = logoVariant === 'japan'
    return (
      <Image
        source={
          isJapanLogo
            ? require('../../../assets/icons/custom_logo_japan.svg')
            : size > 100
              ? require('../../../assets/kawaii.png')
              : require('../../../assets/kawaii_smol.png')
        }
        accessibilityLabel="ADVAY"
        accessibilityHint=""
        accessibilityIgnoresInvertColors
        style={[{height: size, aspectRatio: isJapanLogo ? 2 : 1.4}]}
      />
    )
  }

  return (
    <Image
      // @ts-ignore ref type mismatch between expo-image and forwardRef caller, fiiiiine
      ref={ref}
      source={require('../../../assets/images/advay-logo-mark.png')}
      accessibilityLabel="ADVAY"
      accessibilityHint=""
      accessibilityIgnoresInvertColors
      contentFit="contain"
      style={[
        {width: size, height: explicitHeight ?? size * ratio},
        styles,
      ]}
    />
  )
})
