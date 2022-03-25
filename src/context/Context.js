import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((resp) => {
          setData({ data: resp.data });
          setCargando(false);
        });
    }
    fetchData();
  }, []);

  if (cargando) {
    return <h1>Cargando...</h1>;
  }
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
