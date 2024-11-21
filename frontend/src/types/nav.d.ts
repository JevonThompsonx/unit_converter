declare global {
  interface NavLinkType {
    path: string,
    label: string
  }
  type NavLinksType = NavLinkType[] | []
}

export { }
