import React, { useState, createContext } from "react";


const listCatechism = fetch('http://localhost:3001/api/catechism/catechism')
  
interface IGlobalContextProps {
  catechisms: any;
  setCatechisms: (catechism: any) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  catechisms: {},
  setCatechisms: () => { }
})

export const GlobalContextProvider = (props: any) => {
  const [listCatechisms, setListCatechisms] = useState({ listCatechism })

  return (
    <GlobalContext.Provider
      value={{
        catechisms: listCatechisms,
        setCatechisms: setListCatechisms
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}