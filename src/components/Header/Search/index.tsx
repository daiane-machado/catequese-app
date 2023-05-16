import { GoSearch } from 'react-icons/go'
import styles from "./styles.module.scss";
import Link from 'next/link';
import Dropdown from '../../Dropdown';


export function Search(props: { placeholder: string | undefined, dataCatechism: any}) {

  const listCatechism = props.dataCatechism


  return (
    <div>
      
     <label htmlFor="inputSearch"></label>
      <input className={`fa fa-search ${ styles.inputSearch}`} id="inputSearch" placeholder={props.placeholder}/>
      
      
    </div>
  )
}