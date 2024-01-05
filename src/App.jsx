import { useState,useCallback,useEffect } from "react";

import "./App.css";


function App() {
  
  let [length,setlength]=useState(8)
  let [isNumber,setNumber]=useState(false)
  let [isChar,setChar]=useState(false)
  let [password,setPassword]=useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += "0123456789"
    if (isChar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, isNumber, isChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumber, isChar, passwordGenerator])


  return (
    <>
   

   <div className="bg-gray-700 rounded-xl p-10 flex gap-3 flex-col">
    <h1 className="text-2xl">Password Generator</h1>
    <div className="bg-white rounded-lg overflow-hidden ">
    <input readOnly
  
    value={password}
    className="bg-transparent focus:border-none focus:outline-none text-black px-5 w-4/5 ">
  
    </input>
    <button className="bg-orange-500 w-1/5 rounded-none border-none focus:border-none focus:outline-none hover:bg-orange-600"    onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    <div className="flex
      flex-row gap-5">
    <div className="flex gap-1">
     <input type="range" className="cursor-pointer"
     min={6}
        max={100}
      value={length}
      onChange={ (e)=>{
        setlength(e.target.value)
      }}
    
     ></input> 
      <p >Length: {length}</p>
    </div>
    <div className="flex gap-1">
      <input type="checkbox" onChange={()=>{
        setNumber((Number)=>!Number)
      }}>

      </input>
      <p>Number</p>
    </div>
    <div className="flex gap-1">
      <input type="checkbox" onChange={()=>{
       
        setChar((Charctor)=>!Charctor)
      
      }}>

      </input>
      <p>Charctor {}</p>
    </div>
    </div>
   </div>

    </>
  );
}

export default App;
