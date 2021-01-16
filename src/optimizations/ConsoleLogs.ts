export const disableConsoleLogsInProd = () => {
  // including console logs can slow down your React Native app.
  if (!__DEV__) {
    // eslint-disable-next-line
    console.log = () => {}
    console.warn = () => {}
    console.debug = () => {}
    console.table = () => {}
    console.info = () => {}
    console.error = () => {}
  }
}
