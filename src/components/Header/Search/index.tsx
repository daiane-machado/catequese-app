import { GoSearch } from 'react-icons/go'
import styles from "./styles.module.scss";
import { useGlobalContext } from '../../../provider';

export function Search(props: { placeholder: string | undefined, dataCatechism: any }) {

  const { filterDatas, setFilterDatas } = useGlobalContext()

  return (
    <div>
      <label htmlFor="inputSearch"></label>
      <input
        className={`fa fa-search ${styles.inputSearch}`}
        id="inputSearch"
        placeholder={props.placeholder}
        value={filterDatas}
        onChange={(e) => setFilterDatas(e.target.value)} />
    </div>
  )
}