import { useEffect } from "react"
import { useGlobalContext } from "../provider"

export async function GetListCatechism(){
 
 
  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()

  return { props: data }

}



