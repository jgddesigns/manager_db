import ManagerDBView from './ManagerDBView'
import Insert from './Insert'
import Instructions from '../Instructions'
import SearchProcess from '../../utils/helpers/SearchProcess'
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [searchInput, setSearchInput] = useState('')
  const [allManagerDB, setAllManagerDB] = useState([])
  const [isInsert, setIsInsert] = useState(false)

  useEffect(() => {
    if (allManagerDB.length === 0) {
      fetch("/ManagerDB/api/managers/", {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          setAllManagerDB(data)
        });
      });
    }
  }, [searchInput])

  function testInsert(){
    setIsInsert(true)
  }

  return (
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Manager Update Tool for Construction</div>
        <div className="hidden"><button id="insert_test" onClick={(e)=>{testInsert()}}>Insert</button></div>
        <div>
            <Instructions />
            <ManagerDBView searchResults={SearchProcess(searchInput, allManagerDB)} setSearchInput={setSearchInput} searchInput={searchInput} setAllManagerDB={setAllManagerDB}/>
            {isInsert ?
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[29%]">
                <Insert setInsert={setAllManagerDB} setIsInsert={setIsInsert}/>
                </div>
              </div>
            :null}
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </div>
  )
}

