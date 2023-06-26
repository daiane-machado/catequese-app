import Link from "next/link";
import { Header } from "../components/Header";
import { SimpleCard } from "../components/SimpleCard"
import { useGlobalContext } from "../provider";
import styles from "../../styles/listEvents.module.scss"
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ListEvnets({ data }: any) {


  const router = useRouter()
  const { data: session } = useSession()

  /* useEffect(() => {
    if(!session){
      router.push('/')
    }
  },[]) */
  
  const listCatechism = data
  const { filterDatas, setFilterDatas } = useGlobalContext()
  const lowerSerarch = filterDatas.toLowerCase()
  const catechism = data.filter((item: any) => item.data.title.toLowerCase().includes(lowerSerarch) || item.data.description.toLowerCase().includes(lowerSerarch))

  return (

    <div className={styles.wrapper} onClick={() => { setFilterDatas('') }}>
      {filterDatas ? <Dropdown dataCatechism={catechism} /> : null}
      <Header showButton={true} showSearch={true} dataCatechism={data} />
      <div className={styles.container} >
        <div className={styles.otherEvents}>
          <div className={styles.textMonthEvents}>
            <span >Todos Eventos:</span>
            <Link href={'/'}>{'Início>>'}</Link>
          </div>
        </div>
        <div className={`${styles.list} ${styles.listALL}`}  >
          {listCatechism.map((catechism: any) => (
            <div key={catechism.data.id} >
              <Link href={`/${catechism.ref["@ref"].id}`}>

                <SimpleCard
                  title={catechism.data.title}
                  date={catechism.data.date}
                />
              </Link>
            </div>))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${process.env.API_URL}`)
  const { data } = await res.json()

  return { props: data }
}