import type { PanelProps } from './Panel.types'
import styles from './Panel.module.css'

const Panel = ({ title, children, actions }: PanelProps) => {
  return (
    <div className={styles.panel}>
      <h2>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
      {
        actions != null &&
          <div className={styles.actions}>
            {actions}
          </div>
      }
    </div>
  )
}

export default Panel;
