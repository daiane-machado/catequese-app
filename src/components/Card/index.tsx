import styles from "./styles.module.scss"

export function Card(props: { title: string, description: string, date: string, time: string} ) {
  const newDate = new Date(props.date)
  const time = props.time
  console.log(time.replace(':', 'h'))
  const namesDay = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
  

  const dateEvent = {
    title: props.title,
    date: newDate.getDate(),
    day: namesDay[newDate.getDay()],
    month: newDate.toLocaleString("pt-BR", { month: "short" }),
    year: newDate.getFullYear(),
    time: time.replace(':', 'h')
  }
  return (
    <button className={styles.container} >
      <div className={styles.content}>
        <span className={styles.title}>{props.title}</span>
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