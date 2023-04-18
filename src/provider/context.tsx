import React, { useState, createContext } from "react";
  
interface IGlobalContextProps {
  catechisms: any;
  setCatechisms: (catechism: any) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  catechisms: {},
  setCatechisms: () => { }
})

export const GlobalContextProvider = ({children}: any) => {
  const listCatechism = children.props.data
  
  const [listCatechisms, setListCatechisms] = useState(listCatechism)
 
  return (
    <GlobalContext.Provider
      value={{
        catechisms: listCatechisms,
        setCatechisms: setListCatechisms
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
