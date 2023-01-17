import uuid from 'react-uuid';
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

/* interface IDataCatechism {
  id: string,
  title: string,
  date: string,
  time:string,
  content:string,
  obs: string
} */


export function EventCatechism(props: { title:any, handleData?: any }){
  const { title } = props

  /* let dataCatechism : IDataCatechism
  let listEventCatechism: IDataCatechism[] = [] */
  //const [allContent, setAllContent] = useState({})
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const idUUID = uuid()
    const newCatechism = ( { 
      id: idUUID,
      title: e.target.title.value,
      date: e.target.date.value,
      time: e.target.time.value,
      description: e.target.contentMain.value,
      obs: e.target.contentObs.value,
    } ) 
    props.handleData(newCatechism )
    //listEventCatechism.push(dataCatechism)
    //console.log(allContent)
  }

  const deleteEvent = () => {
    //listEventCatechism.pop()
    console.log("deletar um evento")
  }

 
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.iconCalendar} src="./img/calendar.svg"></img>
        <span className={styles.titulo}>{title}</span>
      </header>
      <main>
        <form className={styles.formEvent} onSubmit={handleSubmit}>
          <label className={styles.labelTitle} htmlFor="title">Titulo</label>
          <input className={styles.inputTitle} id="title" type="text" required></input>

          <div className={styles.dateTime}>
            <div className={styles.col}>
              <label className={styles.labelDate} htmlFor="date">Data</label>
              <input className={styles.inputDate} id="date" type="date" required></input>
            </div>
            <div className={styles.col}>
              <label className={styles.labelTime} htmlFor="time">Hora</label>
              <input className={styles.inputTime} id="time" type="time" required></input>
            </div>
          </div>
          <label className={styles.labelContent} htmlFor="contentMain">Conteúdo do Encontro</label>
          <textarea className={styles.inputContent} id="contentMain" required></textarea>

          <label className={styles.labelObs} htmlFor="contentObs">
            Observação
            <img src="./img/edit.svg"></img>
          </label>
          <textarea className={styles.inputObs} id="contentObs"></textarea>

          <div className={styles.divButtons}>
            <button className={styles.btDelete} onClick={deleteEvent}>Excluir</button>
            <Link href="/">
              <button className={styles.btCancel}>Cancelar</button>
            </Link>
            <button type="submit" className={styles.btSave}>Salvar</button>
          </div>

        </form>
      </main>
    </div>
  )

}