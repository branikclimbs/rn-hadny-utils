import { Platform } from 'react-native'

/**
 * Check Major IOS version
 */
export const isIosVersion = (version: number): boolean => {
  return Platform.OS === 'ios' && parseInt(Platform.Version.toString(), 10) >= version
}

/**
 * Check Major Android version
 */
export const isAnroidVersion = (version: number): boolean => {
  return Platform.OS === 'android' && parseInt(Platform.Version.toString(), 10) >= version
}
