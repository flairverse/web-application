import * as Lib from '.'

export const useFooter = () => {
  const links: Lib.T.FooterLink[] = [
    { text: 'About', href: '/' },
    { text: 'Careers', href: '/' },
    { text: 'Privacy', href: '/' },
    { text: 'Hashtags', href: '/' },
  ]

  return {
    links,
  }
}
