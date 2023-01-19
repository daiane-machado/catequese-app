import { EventCatechism } from "../components/EventCatechism";
import { Header } from "../components/Header";
import styles from "../../styles/newEvent.module.scss"
import { useContext, useState } from "react";
import { useRouter } from "next/router";
//import { CatechismContext } from "../provider/context";

export default function NewEvent() {
  let [newCatechism, setNewCayechism] = useState({})
  //let  catechisms: string | any[], setCatechisms  = useContext(CatechismContext)


  
  const addData = async ( datas : any) => {

    console.log(datas)
    setNewCayechism(datas)
    handleAddCatechism(datas)

  }
    
  async function handleAddCatechism(datas: any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    
  //console.log(datas)
    try{

      const res = await fetch("http://localhost:3001/api/catechism/catechism", {
        method: 'POST',
        body: JSON.stringify({
        data: datas,
        }),
      });
    
    }catch(error){
      console.log(error)
    }

  } 

  return (
    <div className={styles.container}>
        <Header showButton={false} showSearch={false} />
        <EventCatechism titlePage={'Novo Evento'} handleData={addData} />
    </div>

  )
}

/* export async function getServerSideProps() {

  const req = await fetch('http://localhost:3001/api/catechism')
  const { data } = await req.json()
  
  return { props: data}
}  */