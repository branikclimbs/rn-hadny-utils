import { Platform } from 'react-native'

/**
 * Check if Ios
 */
export const isIos = (): boolean => {
  return Platform.OS === 'ios'
}

/**
 * Check if Android
 */
export const isAndroid = (): boolean => {
  return Platform.OS === 'android'
}
