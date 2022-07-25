export interface Highlight {
  date?: string,
  createdAt?: string,
  description?: string,
  info?: string,
  id?: number,
  image: string,
  name: string,
  news?: News,
  quiz?: string
}

export interface News {
  date?: string,
  title: string
}