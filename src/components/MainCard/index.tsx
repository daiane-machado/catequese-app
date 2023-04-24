import styles from "./styles.module.scss"

export function MainCard(props: { title: string, description: string, date: string, time: string} ) {
  const newDate = new Date(`${props.date} 00:00:00`)
  console.log(props.date)

  //2015-07-25T00:00:00-0300
  //console.log(`${data.getUTCFullYear()}-${(data.getUTCMonth()+1).toString().padStart(2, '0')}-${data.getUTCDate().toString().padStart(2, '0')}`); // 1988-03-01

 /*  const testeDate = new Date(props.date).getUTCMonth()
  console.log(props.date)
  console.log(testeDate)
  console.log(newDate) */
  
  const time = props.time
  console.log(time.replace(':', 'h'))
  const namesDay = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

  const dateEvent = {
    title: props.title,
    date: newDate.getDate() < 9 ? `0${newDate.getDate()}` : newDate.getDate(),
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