import React, { useState, createContext } from "react";
  
interface IGlobalContextProps {

  updateDatas: boolean;
  setUpdateDatas: (update: boolean) =>void;
  filterDatas: any;
  setFilterDatas: (data: any) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  
  updateDatas: false,
  setUpdateDatas: () => { },
  filterDatas: '',
  setFilterDatas: () =>''
})

export const GlobalContextProvider = ({children}: any) => {
  const valueData = false
  const filter = ''
  
  const [updateDatas, setUpdateDatas] = useState(valueData)
  const [filterDatas, setFilterDatas] = useState(filter)
 
  return (
    <GlobalContext.Provider
      value={{
        updateDatas: valueData,
        setUpdateDatas: setUpdateDatas,
        filterDatas: filterDatas,
        setFilterDatas: setFilterDatas
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
