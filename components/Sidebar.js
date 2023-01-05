import {FaEdit, FaBell, FaUser, FaHome, FaBook, FaSignOutAlt, FaBug,FaTh, FaSign, FaSitemap} from 'react-icons/fa'
import Image from 'next/image'
import CaltransLogo from '../public/images/caltranslogo-main.png'
import {useEffect,useState} from 'react'
import BugReport from '../components/ManagerDBTable/BugReport'
import Hierarchy from '../components/ManagerDBTable/Hierarchy'
import Insert from '../components/ManagerDBTable/Insert'
import  HierarchyProcess from '../utils/helpers/HierarchyProcess'
import { BallTriangle } from 'react-loader-spinner'


export default function Sidebar() {
    const [user,setUser] = useState({})
    const [isBugReport, setIsBugReport] = useState(false)
    const [isHierarchy, setIsHierarchy] = useState(false)
    const [isInsert, setIsInsert] = useState(false)
    const [HierarchyLoad, setHierarchyLoad] = useState(false)
    const [HierarchyStart, setHierarchyStart] = useState(false)
    const [Employees, setEmployees] = useState('')
    const [EmployeeList, setEmployeeList] = useState([])

    useEffect(() => {
        fetch("/ManagerDB/api/current-user/", {
          method: "GET",
        }).then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              setUser(data);
            });
          }
        }
        );
      }, []);

    //When the sidebar is clicked, the appropriate function is called to display information related to the clicked icon.
    //@param props: The text of the icon that was clicked.
    //@return: Void.
    const defaultClickEvent = (props) => {
      if(props === "Dashboard"){
        window.location.href = "http://svgccrm01.dot.ca.gov:3030/UserBase/build"
      }
      else if(props === "Report a Bug"){
        setIsBugReport(true)
      }else if (props == "Hierarchy"){
        setHierarchyStart(true)
        setHierarchyLoad(true)
        fetch("/ManagerDB/api/managers/", {
          method: "GET",
        }).then((res) => {
          res.json().then((data) => {       
            setEmployeeList(data)   
            setEmployees(HierarchyProcess(data, '04'))
          }).then(()=>{
            setIsHierarchy(true)
            setHierarchyLoad(false)
          })
        })
      }else if("Insert Employee"){
        document.getElementById("insert_test").click()
      }else if("User Guide"){
        window.open('http://svgccrm01.dot.ca.gov:3030/Docs/ManagerDB_Guide.pdf')
      }
      console.log(props + " Sidebar button clicked.")
    }

    //When a sidebar button is clciked, the data will be processed to display the appropriate information.
    //@param: None.
    //@return: Void.
    const SideBarIcon = ({icon,text="tooltip",clickEvent=defaultClickEvent}) => {
      return (
          <div className="sidebar-icon group text-[#75a3cc]" onClick={() => {clickEvent(text)}}>
              {icon}
              <span className= "sidebar-tooltip group-hover:scale-100"> {text}</span>
          </div>
      )
    }

  return (
    <div>
    <div className="flex fixed top-0 left-0 w-24 flex-col bg-[#333] h-screen shadow-lg ">
      <div className="pt-4 p-4" >
          <Image src={CaltransLogo} layout="responsive" alt=""  className="pt-16" />
      </div>
      <div className='grid gap-6 pt-6'> 
      <div className="sidebar-icon group bg-gray-600 text-[#75a3cc] cursor-default" text={`Logged in as ${user.UserName}`}>{getUserInitials(user.UserName)}</div>
      <SideBarIcon icon={<FaEdit/>} text={"Insert Employee"}/>
      <SideBarIcon icon={<FaSitemap/>} text={"Hierarchy"}/>
      <SideBarIcon icon={<FaBug/>} text={"Report a Bug"}/>
      <SideBarIcon icon={<FaTh/>} text={"Dashboard"}  />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto
        bg-gray-800 text-[#75a3cc] hover:text-white hover:bg-gray-500 
        rounded-3xl hover:rounded-xl transition-all cursor-pointer group fixed bottom-0" onClick={handleLogout}>
          <FaSignOutAlt/>
          <span className= "sidebar-tooltip group-hover:scale-100 " >Logout</span>
        </div>
      </div>
    </div>
    {isBugReport ?
      <div>
        <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"></div>
        <div className="absolute z-2 top-[10%] left-[35%]">
        <BugReport user={user} setIsBugReport={setIsBugReport}/>
        </div>
      </div>
    :null}

    {HierarchyStart ?
      <div>
        <div className="fixed w-[100%] h-[100%] left-0 top-0 z-1 bg-gray-800 opacity-75"> </div>

        {HierarchyLoad ? 
          <div className="fixed z-2 top-[30%] left-[42%]">
            <BallTriangle
            height={275}
            width={275}
            radius={4}
            color='#70AA9B'
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
            />
          </div>
        : null}
            
        {isHierarchy ?
          <div className="absolute mt-[5%] ml-[7%] mb-16 z-2">
            <Hierarchy user={user} setIsHierarchy={setIsHierarchy} setHierarchyStart={setHierarchyStart} Employee={Employees}/>
          </div>
        :null}
    </div>
  :null}
    </div>
    
    )
}

//Accesses the user information to display the initials of the user in the sidebar.
//@param userFullName: The full name of the user.
//@return: The initials of the user.
const getUserInitials = (userFullName) =>{
    if(userFullName){
        let initials = userFullName.split(" ").map(name => name[0]).join("")
        return initials
    }
    return "NA"
}

//When the logout button is clicked, processes the logout information and redirects the user to the UserBase app.
//@param: None.
//@return: Void.
const handleLogout = () => {
    fetch("/ManagerDB/api/logout/", {
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
            window.location.href = "/UserBase"
        });
      }}
    );
}

