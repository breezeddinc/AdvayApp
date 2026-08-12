import {type SvgProps} from 'react-native-svg'
import {Image} from 'expo-image'

// assets/images/advay-logo-mark.png is 862x721
const ratio = 721 / 862

export function Logomark({
  fill: _fill, // accepted for backwards compatibility; the raster mark can't be tinted
  ...rest
}: {fill?: string} & SvgProps) {
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32)

  return (
    <Image
      source={require('../../../assets/images/advay-logo-mark.png')}
      accessibilityLabel="ADVAY"
      accessibilityHint=""
      accessibilityIgnoresInvertColors
      contentFit="contain"
      // @ts-ignore style type mismatch between expo-image and SvgProps, fiiiiine
      style={[{width: size, height: size * ratio}, rest.style]}
    />
  )
}
