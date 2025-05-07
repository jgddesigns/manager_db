import ManagerDBView from './ManagerDBView'
import Insert from './modals/Insert'
import ClearEmployee from './modals/ClearEmployee'
import ClearChanges from './modals/ClearChanges'
import SaveEmployee from './modals/SaveEmployee'
import ResetData from './modals/ResetData'
import Instructions from './Instructions'
import SearchProcess from '../../utils/helpers/SearchProcess'
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DynamoDB from '../../database/DynamoDB.js'

export default function index(props) {
  const [searchInput, setSearchInput] = useState('')
  const [allManagerDB, setAllManagerDB] = useState([])
  const [isInsert, setIsInsert] = useState(false)
  const [isClear, setIsClear] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [isAssign, setIsAssign] = useState(false)
  const [GetData, setGetData] = useState(false)

  useEffect(() => {
    if(props.Items.length > 0){
      console.log("DB confirmed")
      // let items = 
      console.log(JSON.parse(props.Items)["items"])
      setAllManagerDB(JSON.parse(props.Items)["items"])
    } 
  }, [props.Items])

  function setInsert(){
    setIsInsert(true)
  }

  function setClear(){
    setIsClear(true)
  }

  function setChange(){
    setIsChange(true)
  }

  function setSave(){
    setIsSave(true)
  }

  function setReset(){
    setIsReset(true)
  }

  function setAssign(){
    setIsAssign(true)
  }

  return (
    <div>
    {window.screen.width < 800 ?
      <div className="mt-48 text-black">
        No mobile support. Intended for desktop only. 
      </div>
    :
    <div className="grid gap-[1rem] space-y-4 pb-24">
      <div className="text-center text-3xl text-black mt-8 mb-8">Database Modifier</div>
        <div className="hidden"><button id="insert_test" onClick={(e)=>{setInsert()}}>Insert</button></div>
        <div className="hidden"><button id="clear_test" onClick={(e)=>{setClear()}}>Clear</button></div>
        <div className="hidden"><button id="clear_data_test" onClick={(e)=>{setChange()}}>Clear Data</button></div>
        <div className="hidden"><button id="save_test" onClick={(e)=>{setSave()}}>Save</button></div>
        <div className="hidden"><button id="reset_test" onClick={(e)=>{setReset()}}>Reset</button></div>
        <div className="hidden"><button id="assign_test" onClick={(e)=>{setAssign()}}>Assign</button></div>
        <div>
            <Instructions />
            <ManagerDBView searchResults={SearchProcess(searchInput, allManagerDB)} setSearchInput={setSearchInput} searchInput={searchInput} setAllManagerDB={setAllManagerDB}/>
            {isInsert ?
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[28%]">
                <Insert setInsert={setAllManagerDB} setIsInsert={setIsInsert}/>
                </div>
              </div>
            :null}
            {isClear ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[28%]">
                <ClearEmployee setClear={setClear} setIsClear={setIsClear}/>
                </div>
              </div>
            : null }
            {isSave ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[28%]">
                <SaveEmployee setIsSave={setIsSave}/>
                </div>
              </div>
            : null }
            {isChange ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[28%]">
                <ClearChanges setIsChange={setIsChange}/>
                </div>
              </div>
            : null }
            {isReset ? 
              <div>
                <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
                <div className="absolute z-2 top-[10%] left-[28%]">
                <ResetData setIsReset={setIsReset}/>
                </div>
              </div>
            : null }
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
        <DynamoDB GetData={GetData} setAllManagerDB={setAllManagerDB} />
    </div>}</div>
  )
}

