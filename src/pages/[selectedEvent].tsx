import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useRouter } from "next/router";
import { useGlobalContext } from "../provider";
import { FormEvent } from "../components/FormEvent";


export default function SelectedEvent( {data} : any) {


  const [teste] = data
  console.log(teste.map((item : any, index: any )=> item.ref["@ref"].id))
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

      const res = await fetch("http://localhost:3001/api/catechism/catechism", {
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


  const event = (data.filter((item: any )=> item.data.title === selectedEvent).map((catechism: any )=> catechism))[0].data
  
  
  const dataEvent = {
    
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

