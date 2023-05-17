import React, { useState, createContext } from "react";
  
interface IGlobalContextProps {
  catechisms: any;
  setCatechisms: (catechism: any) => void;
  updateDatas: boolean;
  setUpdateDatas: (update: boolean) =>void;
  filterDatas: any;
  setFilterDatas: (data: any) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  catechisms: {},
  setCatechisms: () => { },
  updateDatas: false,
  setUpdateDatas: () => { },
  filterDatas: '',
  setFilterDatas: () =>''
})

export const GlobalContextProvider = ({children}: any) => {
  const listCatechism = children.props.data
  const valueData = false
  const filter = ''
  
  const [listCatechisms, setListCatechisms] = useState(listCatechism)
  const [updateDatas, setUpdateDatas] = useState(valueData)
  const [filterDatas, setFilterDatas] = useState(filter)
 
  return (
    <GlobalContext.Provider
      value={{
        catechisms: listCatechisms,
        setCatechisms: setListCatechisms,
        updateDatas: valueData,
        setUpdateDatas: setUpdateDatas,
        filterDatas: filterDatas,
        setFilterDatas: setFilterDatas
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
