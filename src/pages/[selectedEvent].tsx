import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useRouter } from "next/router";
import { useGlobalContext } from "../provider";
import { FormEvent } from "../components/FormEvent";
import { GetListCatechism } from "../utils/getListCatechism";


export default function SelectedEvent({ data }: any) {

  const { setCatechisms } = useGlobalContext()
  setCatechisms(data)
  
  const router = useRouter()
  const {selectedEvent} = router.query

  
  


  async function handleUpdateCatechism(datas: any) {

    try {

      const res = await fetch("http://localhost:3001/api/catechism/catechism", {
        method: 'PUT',
        body: JSON.stringify({
          data: datas,
        }),
      });

    } catch (error) {
      console.log(error)
    }

  }


  const event = (data.filter((item: any )=> item.data.title === selectedEvent).map((catechism: any )=> catechism))[0].data
  
  
  const dataEvent = {
    
    title: event.title,
    date: event.date,
    time: event.time,
    description: event.description,
    obs: event.obs,
  }

  console.log(event[0])

  return (
    <div className={styles.container}>
        <Header showButton={false} showSearch={false} />
        <FormEvent action={'view'} content={dataEvent} />
    </div>

  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }
} 

