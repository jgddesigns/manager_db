import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
    
    <div className="flex h-screen justify-center ">
        <div >
            <Sidebar />
        </div>
        <div  >
          {children}
        </div>
    </div>
  )
}

