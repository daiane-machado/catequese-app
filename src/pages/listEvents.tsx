import Link from "next/link";
import { Header } from "../components/Header";
import { SimpleCard } from "../components/SimpleCard"
import { useGlobalContext } from "../provider";
import styles from "../../styles/Home.module.scss"

export default function ListEvnets({data}: any) {
  //const { catechisms } = useGlobalContext()
  //const listCatechim = catechisms
  const listCatechism = data
  console.log(listCatechism)


  return(

    <div>
      <Header showButton={true} showSearch={true} dataCatechism={data} />
     
      <div className={styles.container}>
          
      <div className={styles.otherEvents}>
          <div className={styles.textMonthEvents}>
            <span >Todos Eventos:</span>
            <Link href={'/'}>{'Início>>'}</Link>
          </div>
        </div>
    
         
         
     
        <div className={`${styles.list} ${styles.listALL}`}  >
              {listCatechism.map((catechism : any) => (
                <div key={catechism.data.id} >
                  <Link href={`http://localhost:3001/${catechism.ref["@ref"].id}`}>

                    <SimpleCard 
                      title={catechism.data.title}
                      date={catechism.data.date}
                      />
                  </Link>
                </div>))
              }
          </div>
        </div>
      </div>
  )


  
}

//solução provisória
export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }
}