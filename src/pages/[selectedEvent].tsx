import { EventCatechism } from "../components/EventCatechism";
import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useRouter } from "next/router";
import { useGlobalContext } from "../provider";


export default function SelectedEvent({ data }: any) {

  const { setCatechisms } = useGlobalContext()
  setCatechisms(data)
  
  const router = useRouter()
  const {selectedEvent} = router.query


  return (
    <div className={styles.container}>
        <Header showButton={false} showSearch={false} />
        <EventCatechism titlePage={selectedEvent}/>
    </div>

  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }
} 


/* export async function getStaticProps(params: { id: any }) {
  const res = await fetch(`http://localhost:3001/api/catechism/catechism/${params.id}`)
  const post = await res.json() 
  return {props : {post}}
}   */