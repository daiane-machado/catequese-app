import uuid from 'react-uuid'
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "./styles.module.scss"
import Image from 'next/image';
import { IoIosSave } from "react-icons/io";
import { GiCancel } from "react-icons/gi"
import { RiDeleteBin5Fill } from "react-icons/ri"


export function FormEvent(props: { handleData?: any, content: any, action: any} ) {
  const { handleData, content, action } = props
  const router = useRouter()
  
  const [id, setId] = useState(content.id)
  const [title, setTitle] = useState(content.title)
  const [date, setDate] = useState(content.date)
  const [time, setTime] = useState(content.time)
  const [description, setDescription] = useState(content.description)
  const [obs, setObs] = useState(content.obs)
  
  function changeValue (e : any) {
    const newValue = e.target.value
    const field = e.target.id

    switch (field) {
      case 'title':
        setTitle(newValue);
        break;
      case 'date':
        setDate(newValue);
        break;
      case 'time':
        setTime(newValue);
        break;
      case 'description':
        setDescription(newValue);
        break;
      case 'obs':
        setObs(newValue);
        break;
    }
  }

  if(action === 'save'){
    null
  }

 
  const save = (e: any) =>{
    e.preventDefault()
    const idUUID = uuid()

    const id = content.id === '' ? idUUID : content.id
    const newCatechism = ({
      id: id,
      title: title,
      date: date,
      time: time,
      description: description,
      obs: obs,
    })
    handleData(newCatechism)
    router.push("/")

  }

  

  
  function handleCancel  ()  {
    console.log('testando..')
    return router.push("/")
    
  }



  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image className={styles.iconCalendar} src="/img/calendar.svg" alt="Calendario" width={20} height={20}></Image>
        <span className={styles.titulo}>{content.title === ''? 'Novo Encontro' : title}</span>
      </header>
      <main>
        <form className={styles.formEvent} onSubmit={save}>
          <div className={styles.wrapperButtons}>
          <button type='submit'>
              <IoIosSave className={`${styles.iconButtons} ${styles.iconSave}`}/>
            </button>
         
            <button onClick={handleCancel}>
              <GiCancel className={`${styles.iconButtons} ${styles.iconCancel}`}/>
            </button>
          
          {
            content.title === '' ? null :
          <button>
            <RiDeleteBin5Fill className={`${styles.iconButtons} ${styles.iconDelete}`}/>
          </button>
          }
          </div>
          <label className={styles.labelTitle} htmlFor="title">Titulo</label>
          <input
            className={styles.inputTitle}
            id="title"
            type="text"
            value={title}
            onChange={changeValue}
            maxLength={31}
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
            <button className={styles.btDelete} >Excluir</button>
            <Link href="/">
              <button className={styles.btCancel}>Cancelar</button>
            </Link>
            <button type="submit" className={styles.btSave}>
              <IoIosSave className={styles.iconSave}/>
            </button>
          </div>
        </form>
      </main>
    </div>
  )

}