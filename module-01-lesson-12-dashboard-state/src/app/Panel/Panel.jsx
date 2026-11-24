import styles from './Panel.module.css'

export default function Panel({ title, children, actions }) {
  return (
    <div className={styles.panel}>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
      {actions != null && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}
