import {useEffect,useState} from 'react'
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (    
    <div className="flex h-screen justify-center ">
      <div >
          <Sidebar/>
      </div>
      <div className="pl-16">  
        {children}
      </div>
    </div>
  )
}

