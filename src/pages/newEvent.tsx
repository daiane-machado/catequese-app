import { EventCatechism } from "../components/EventCatechism";
import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useGlobalContext } from "../provider";
import { FormEvent } from "../components/FormEvent";
import { useRouter } from "next/router";
//import { GetListCatechism } from "../utils/getListCatechism";

export default function NewEvent( ) {
  //let  catechisms: string | any[], setCatechisms  = useContext(CatechismContext)
  const router = useRouter()
  const { catechisms, setCatechisms, setUpdateDatas } = useGlobalContext()
  setUpdateDatas(true)
  

  function refreshData () {
    router.replace(router.asPath)
    console.log('Fiz refresh')
    setUpdateDatas(true)
  }
 


  const addData = async (data: any) => {
    
    const newData = { data }
    console.log(newData)
    console.log(data)
    
    //setNewCayechism(newData)
    handleCreateCatechism(data)
    setCatechisms([...catechisms, newData])
  }
   
  
  async function handleCreateCatechism(datas: any) {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    //console.log(datas)
    try {

      const res = await fetch("http://localhost:3001/api/catechism/catechism", {
        method: 'POST',
        body: JSON.stringify({
          data: datas,
        }),
      });

      setUpdateDatas(true)
      

    } catch (error) {
      console.log(error)
    }

  }

  const dataEvent = {
    id: '',
    title: '',
    date: '',
    time: '',
    description: '',
    obs: '',
  }

  return (
      
    <div className={styles.container}>
      <Header showButton={false} showSearch={false} />
      <FormEvent action={'save'} handleData={addData} content={dataEvent}/>
    </div>
    
  )
}

//GetListCatechism()

//solução provisória:
export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }
} 