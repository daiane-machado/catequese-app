import { Header } from '../components/Header';
import { useRouter } from 'next/router';
import { FormEvent } from '../components/FormEvent';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';


export default function SelectedEvent({ data }: any) {

  const router = useRouter()
  const { selectedEvent } = router.query
  const { data: session } = useSession()
  console.log(session)
 
  
  useEffect(()=> {
    if (!session){
      router.push('/')
    }
  }, [])



  const updateData = async (data: any) => {
    handleUpdateCatechism(data)
  }
   
  async function handleUpdateCatechism(datas: any) {

    try {
      await fetch(`${process.env.API_URL}`, {
        method: 'PUT',
        body: JSON.stringify({
          data: datas,
        }),
      });
    } catch (error) {
      console.log(error)
    }
  }

  const event = (data.filter((item: any) => item.ref["@ref"].id === selectedEvent).map((catechism: any) => catechism))[0].data

  const dataEvent = {
    id: selectedEvent,
    title: event.title,
    date: event.date,
    time: event.time,
    description: event.description,
    obs: event.obs,
  }

    

  
  
  return (
    <>
    { session && (
   
    <div>
      <Header showButton={false} showSearch={false} />
      <FormEvent action={'view'} handleData={updateData} content={dataEvent} />
      <Footer />
    </div>
  )}

  </>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${process.env.API_URL}`)
  const { data } = await res.json()

  return { props: data }
}

