import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useRouter } from "next/router";
import { useGlobalContext } from "../provider";
import { FormEvent } from "../components/FormEvent";
import { query } from "faunadb";


export default function SelectedEvent( {data} : any) {


  //const [teste] = data
  const x = (data.filter((item : any) => item.ref["@ref"].id === '363472680440037457').map((catechism: any )=> catechism.data))
  
  console.log(x)
  const { catechisms, setCatechisms } = useGlobalContext()
  setCatechisms(data)
  
  const router = useRouter()
  const {selectedEvent} = router.query


  const updateData = async (data: any) => {
    
    const newData = { data }
    console.log(newData)
    console.log(data)
    
    //setNewCayechism(newData)
    handleUpdateCatechism(data)
    setCatechisms([...catechisms, newData])
  }


  async function handleUpdateCatechism(datas: any) {

    try {

      const res = await fetch(`http://localhost:3001/api/catechism/catechism/`, {
        method: 'PUT',
       
        body: JSON.stringify({
          data: datas,
        }),
      });
      
    } catch (error) {
      console.log(error)
      console.log('não deu')
    }

  }


  const event = (data.filter((item: any )=> item.ref["@ref"].id === selectedEvent).map((catechism: any )=> catechism))[0].data
  
  
  console.log(selectedEvent)
  
  const dataEvent = {
    id: selectedEvent,
    title: event.title,
    date: event.date,
    time: event.time,
    description: event.description,
    obs: event.obs,
  }

  console.log(event)

  return (
    <div className={styles.container}>
        <Header showButton={false} showSearch={false} />
        <FormEvent action={'view'} handleData={updateData} content={dataEvent} />
    </div>

  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }
} 

