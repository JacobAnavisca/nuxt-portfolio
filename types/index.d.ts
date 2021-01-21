export type SkillsItem = {
  title: string,
  category: string | string[]
}

type ContentCard = {
  id?: string,
  title?: string,
  src?: string
}

export type AboutCard = ContentCard & {
  subtitle?: string,
  content?: string,
  contentType?: string
  width?: string,
  height?: string
}

export type WorkCard = ContentCard & {
  description?: string,
  link?: string
}
