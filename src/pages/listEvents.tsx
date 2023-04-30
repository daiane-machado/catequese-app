import Link from "next/link";
import { Header } from "../components/Header";
import { SimpleCard } from "../components/SimpleCard"
import { useGlobalContext } from "../provider";
import styles from "../../styles/Home.module.scss"

export default function ListEvnets() {
  const { catechisms } = useGlobalContext()
  const listCatechim = catechisms


  return(

    <div>
      <Header showButton={true} showSearch={true} />
     
     <div className={styles.container}>
      <div className={`${styles.list} ${styles.listALL}`}  >
            {listCatechim.map((catechism : any) => (
              <div key={catechism.data.id} >
                <Link href={`http://localhost:3001/${catechism.data.title}`}>

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