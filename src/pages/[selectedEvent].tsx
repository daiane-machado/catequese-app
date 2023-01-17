import { EventCatechism } from "../components/EventCatechism";
import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"

export default function SelectedEvent({ title } : any ) {
  console.log(title)
  return (
    <div className={styles.container}>
        <Header showButton={false} showSearch={false} />
        <EventCatechism title={'Evento salvo'} />
    </div>

  )
}


/* export async function getStaticProps(params: { id: any }) {
  const res = await fetch(`http://localhost:3001/api/catechism/catechism/${params.id}`)
  const post = await res.json() 
  return {props : {post}}
}   */