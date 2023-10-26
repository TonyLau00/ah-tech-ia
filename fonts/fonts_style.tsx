import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / SCREEN_HEIGHT;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


export const font_styles = StyleSheet.create({
    mini: {
        fontSize: normalize(24),
    },
    small: {
        fontSize: normalize(30),
    },
    medium: {
        fontSize: normalize(42),
    },
    large: {
        fontSize: normalize(56),
    },
    xlarge: {
        fontSize: normalize(72),
    },
    bold: {
        fontWeight: "bold"
    },
    italic: {
        fontStyle: "italic"
    }
});