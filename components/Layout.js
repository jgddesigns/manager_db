import {useEffect,useState} from 'react'
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (    
    <div className="grid place-items-center">
    {window && window.screen.width < 800 ?
      <div className="mt-72 text-black">
        No mobile support. Intended for desktop only. 
      </div>
    :
    <div className="flex h-screen justify-center ">
      <div >
          <Sidebar/>
      </div>
      <div className="pl-16">  
        {children}
      </div>
    </div>}</div>
  )
}

