import { EventCatechism } from "../components/EventCatechism";
import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useGlobalContext } from "../provider";

export default function NewEvent() {
  //let  catechisms: string | any[], setCatechisms  = useContext(CatechismContext)
  const { catechisms, setCatechisms } = useGlobalContext()

  const addData = async (data: any) => {

    const newData = { data }
    console.log(newData)
    console.log(data)

    //setNewCayechism(newData)
    handleAddCatechism(data)
    setCatechisms([...catechisms, newData])

    

  }

  async function handleAddCatechism(datas: any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks

    //console.log(datas)
    try {

      const res = await fetch("http://localhost:3001/api/catechism/catechism", {
        method: 'POST',
        body: JSON.stringify({
          data: datas,
        }),
      });

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.container}>
      <Header showButton={false} showSearch={false} />
      <EventCatechism titlePage={'Novo Evento'} handleData={addData} action={"save"} />
    </div>

  )
}

/* export async function getServerSideProps() {

  const req = await fetch('http://localhost:3001/api/catechism')
  const { data } = await req.json()
  
  return { props: data}
}  */