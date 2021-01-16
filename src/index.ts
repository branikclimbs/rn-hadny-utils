import { isAndroid, isIos, isAnroidVersion, isIosVersion } from './platform'
import { disableConsoleLogsInProd } from './optimizations'
import { getHeightFromRatio, getWidthFromRatio, getAspectRatio } from './dimensions'
import { useTextLines, useComponentSize } from './hooks'
import { openLink, mailto } from './other'

export {
  isAndroid,
  isIos,
  isAnroidVersion,
  isIosVersion,
  disableConsoleLogsInProd,
  getHeightFromRatio,
  getWidthFromRatio,
  getAspectRatio,
  useComponentSize,
  useTextLines,
  openLink,
  mailto,
}
