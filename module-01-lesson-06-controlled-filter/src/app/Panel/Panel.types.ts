import type { ReactNode } from "react"

export type PanelProps = {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}
