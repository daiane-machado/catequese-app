/* import React, { useState } from "react";

export const CatechismContext = React.createContext({});
export const CatechismProvider = ( props  : any) => {
  const [catechisms, setCatechisms] = useState({
    id: 'Olá',
  title: '',
  date: '',
  time:'',
  content:'',
  obs: ''
  })

  return(
    <CatechismContext.Provider value={{
      catechisms, setCatechisms
    }}>
      {props.children}

    </CatechismContext.Provider>

  );
} */