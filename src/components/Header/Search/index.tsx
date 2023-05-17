import { GoSearch } from 'react-icons/go'
import styles from "./styles.module.scss";
import Link from 'next/link';
import Dropdown from '../../Dropdown';
import { useState } from 'react';
import { useGlobalContext } from '../../../provider';


export function Search(props: { placeholder: string | undefined, dataCatechism: any}) {

  const listCatechism = props.dataCatechism

  const [search, setSearch] = useState('')

  //pegar o context e colocar o value do input
  const { filterDatas, setFilterDatas } = useGlobalContext()

  


console.log(filterDatas)
  return (
    <div>
      
     <label htmlFor="inputSearch"></label>
      <input className={`fa fa-search ${ styles.inputSearch}`} id="inputSearch" placeholder={props.placeholder} value={filterDatas} onChange={(e)=> setFilterDatas(e.target.value)}/>
      
      
    </div>
  )
}