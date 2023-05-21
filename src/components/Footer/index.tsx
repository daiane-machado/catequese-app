import styles from "./styles.module.scss"

const date = new Date()
const year = date.getFullYear()

export default function Footer(){
  return (
    <div className={styles.container}>
      <span className={styles.text}>{`D2M Design . ${year}`}</span>
    </div>
  )
}