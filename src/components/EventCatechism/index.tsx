import uuid from 'react-uuid';
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import Image from 'next/image';

/* interface IDataCatechism {
  id: string,
  title: string,
  date: string,
  time:string,
  content:string,
  obs: string
} */


export function EventCatechism(props: { titlePage: any, handleData?: any }) {
  const { titlePage } = props
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [obs, setObs] = useState("")

  /* let dataCatechism : IDataCatechism
  let listEventCatechism: IDataCatechism[] = [] */
  //const [allContent, setAllContent] = useState({})

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const idUUID = uuid()
    const newCatechism = ({
      id: idUUID,
      title: title,
      date: date,
      time: time,
      description: description,
      obs: obs,
    })
    props.handleData(newCatechism)
    clearForm(e)
  }

  const clearForm = (e: any) => {
    e.preventDefault()

    setTitle("")
    setDate("")
    setTime("")
    setDescription("")
    setObs("")
  }

  const deleteEvent = () => {
    //listEventCatechism.pop()
    console.log("deletar um evento")
  }



  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image className={styles.iconCalendar} src="/img/calendar.svg" alt="Calendario" width={20} height={20}></Image>
        <span className={styles.titulo}>{titlePage}</span>
      </header>
      <main>
        <form className={styles.formEvent} onSubmit={handleSubmit}>
          <label className={styles.labelTitle} htmlFor="title">Titulo</label>
          <input
            className={styles.inputTitle}
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required>
          </input>

          <div className={styles.dateTime}>
            <div className={styles.col}>
              <label className={styles.labelDate} htmlFor="date">Data</label>
              <input
                className={styles.inputDate}
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required>
              </input>
            </div>
            <div className={styles.col}>
              <label className={styles.labelTime} htmlFor="time">Hora</label>
              <input
                className={styles.inputTime}
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required>
              </input>
            </div>
          </div>
          <label className={styles.labelContent} htmlFor="contentMain">Conteúdo do Encontro</label>
          <textarea
            className={styles.inputContent}
            id="contentMain"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>
          </textarea>

          <label className={styles.labelObs} htmlFor="contentObs">
            Observação
            <Image src="/img/edit.svg" alt="icone edição" width={19.2} height={19.2}></Image>
          </label>
          <textarea
            className={styles.inputObs}
            id="contentObs"
            value={obs}
            onChange={(e) => setObs(e.target.value)}>
          </textarea>

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