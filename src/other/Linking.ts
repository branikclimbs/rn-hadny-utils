import { Linking } from 'react-native'

export const openLink = (link: string): void => {
  let url = link

  if (!url.match(/^[a-zA-Z]+:\/\//)) {
    url = `http://${url}`
  }

  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log(`Can't handle url: ${url}`)
      } else {
        return Linking.openURL(url)
      }
    })
    .catch((err) => console.error('An error occurred', err))
}

export const mailto = (email: string, subject?: string, body?: string): void => {
  let link = `mailto:${email}`

  if (subject) {
    link = `${link}?subject=${subject}`
  }
  if (subject && body) {
    link = `${link}&body=${body}`
  }
  if (!subject && body) {
    link = `${link}?body=${body}`
  }

  Linking.canOpenURL(link)
    .then((supported) => {
      if (!supported) {
        console.log(`Can't handle mail link: ${link}`)
      } else {
        Linking.openURL(link)
      }
    })
    .catch((err) => console.error('An error occurred', err))
}
