import { GoSearch } from 'react-icons/go'
import styles from "./styles.module.scss";


export function Search(props: { placeholder: string | undefined}) {

  return (
    <div>
    <label htmlFor="inputSearch"></label>
    <input className={`fa fa-search ${ styles.inputSearch}`} id="inputSearch" placeholder={props.placeholder}>
    </input>
    </div>
  )
}