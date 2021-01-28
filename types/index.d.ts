export type SkillsItem = {
  id?: string,
  title: string,
  categories: string[]
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

export interface RootState {
    version: string
}
