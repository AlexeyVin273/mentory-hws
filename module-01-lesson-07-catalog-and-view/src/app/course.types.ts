export type Course = {
  id: string
  title: string
  category: string
  seats: number
  version: number
}

export type CourseSelectFn = (id: string) => void

export type CourseListViewProps = {
  items: Course[]
  emptyText: string
  onSelect: CourseSelectFn
}
