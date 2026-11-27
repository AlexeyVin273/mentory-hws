import type { UseSelectionResult } from "./useSelection";

export function checkSelectionTypes(selection: UseSelectionResult) {
  selection.select('course-1')

  // @ts-expect-error: select принимает строку, а не число
  selection.select(123)
}
