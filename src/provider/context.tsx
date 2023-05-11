import React, { useState, createContext } from "react";
  
interface IGlobalContextProps {
  catechisms: any;
  setCatechisms: (catechism: any) => void;
  updateDatas: boolean;
  setUpdateDatas: (update: boolean) =>void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  catechisms: {},
  setCatechisms: () => { },
  updateDatas: false,
  setUpdateDatas: () => { }
})

export const GlobalContextProvider = ({children}: any) => {
  const listCatechism = children.props.data
  const valueData = false
  
  const [listCatechisms, setListCatechisms] = useState(listCatechism)
  const [updateDatas, setUpdateDatas] = useState(valueData)
 
  return (
    <GlobalContext.Provider
      value={{
        catechisms: listCatechisms,
        setCatechisms: setListCatechisms,
        updateDatas: valueData,
        setUpdateDatas: setUpdateDatas
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
