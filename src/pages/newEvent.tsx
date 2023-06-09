import { Header } from "../components/Header";
import styles from "../../styles/Home.module.scss"
import { useGlobalContext } from "../provider";
import { FormEvent } from "../components/FormEvent";
import Footer from "../components/Footer";

export default function NewEvent() {

  const { setUpdateDatas } = useGlobalContext()
  setUpdateDatas(true)

  const addData = async (data: any) => {
    handleCreateCatechism(data)
  }


  async function handleCreateCatechism(datas: any) {
    try {
      await fetch(`${process.env.API_URL}`, {
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
      <FormEvent action={'save'} handleData={addData} content={dataEvent} />
      <Footer />
    </div>

  )
}