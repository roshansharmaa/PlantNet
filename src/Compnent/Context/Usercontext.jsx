import React, { createContext, useState } from "react";

export let firstContext = createContext();

function Usercontext({ children }) {
  let [data, setdata] = useState( { name: "", dec: "",photo:'',owner:'',price:'' });
  let [addt, setaddt] = useState(false);
  let value = {data, setaddt, addt, setdata};
  return (
    <>
      <firstContext.Provider value={value}>{children}</firstContext.Provider>
    </>
  );
}

export default Usercontext;
