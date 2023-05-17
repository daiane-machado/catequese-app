import Link from "next/link"
import styles from "./styles.module.scss"

export default function Dropdown (props : { dataCatechism : any}){


  const listCatechism = props.dataCatechism
  return (
    <div className={styles.dropdown}>
        <div id="searchDropdown" className={styles.dropdownContent}>
        {listCatechism.map((catechism : any) => (
                  <div key={catechism.data.id} >
                    <Link href={`http://localhost:3001/${catechism.ref["@ref"].id}`} className={styles.link}>
                      {catechism.data.title}
                    </Link>
                  </div>))
                }
        </div>
      </div>
  )
}