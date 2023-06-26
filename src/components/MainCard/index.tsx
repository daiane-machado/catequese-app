import styles from "./styles.module.scss"

export function MainCard(props: { title: string, description: string, date: string, time: string }) {

  const checkData = props.title ? true : false
  const newDate = new Date(`${props.date} 00:00:00`)


  //2015-07-25T00:00:00-0300
  

  const time = props.time
  const namesDay = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

  const dateEvent = checkData ? {
    date: newDate.getDate() < 9 ? `0${newDate.getDate()}` : newDate.getDate(),
    day: namesDay[newDate.getDay()],
    month: newDate.toLocaleString("pt-BR", { month: "short" }),
    year: newDate.getFullYear(),
    time: time.replace(':', 'h')
  } :
    {
      date: "00",
      day: "",
      month: "",
      year: "",
      time: ""
    }

  return (
    <button className={styles.container} >
      <div className={styles.content}>
        <span className={styles.title}>{props.title ? props.title : "Não há próximo evento"}</span>
        <span className={styles.description}>{props.description}
        </span>
      </div>
      <picture className={styles.calendar}>
        <div className={styles.mounthYear}><span >{`${dateEvent.month}  ${dateEvent.year}`}</span></div>
        <div className={styles.day}><span >{dateEvent.date}</span></div>
        <div className={styles.hour}><span >{`${dateEvent.day} - ${dateEvent.time}`}</span></div>
      </picture>
    </button>

  )
}