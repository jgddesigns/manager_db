import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
    <div>
        <div className="flex">
            <Sidebar />
        </div>
        {children}
    </div>
  )
}

