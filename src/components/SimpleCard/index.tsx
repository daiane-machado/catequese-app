import styles from "./styles.module.scss"

import Image from "next/image"

export function SimpleCard(props: {title: string, date: string, time: string} ){

  const newDate = new Date(`${props.date} 00:00:00`)
  
  const dateEvent = {
    date: newDate.getDate() < 9 ? `0${newDate.getDate()}` : newDate.getDate(),
    month: newDate.toLocaleString("pt-BR", { month: "short" }),
    year: newDate.getFullYear(),
  }

  return(
    <button className={styles.container}>
      <span className={styles.text}>{props.title}</span>
      <div className={styles.date}>
        <Image className={styles.iconCalendar} src="/img/calendar.svg" alt="Calendario" width={20} height={20}></Image>
        <span className={styles.text}>{dateEvent.date}</span>
        <span className={styles.text}>{dateEvent.month}</span>
        <span className={styles.text}>{dateEvent.year}</span>
      </div>

    </button>   

  )
}