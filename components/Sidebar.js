import {FaBell, FaUser, FaHome, FaSignOutAlt, FaBug,FaTh, FaSign} from 'react-icons/fa'
import Image from 'next/image'
import CaltransLogo from '../public/images/caltranslogo-main.png'
import {useEffect,useState} from 'react'

export default function Sidebar() {
    const [user,setUser] = useState({}) // I would rather use the session for this, but I don't know how to do that yet.

    useEffect(() => {
        // fetch from api/current-user
        
        fetch("/ManagerDB/api/current-user/", {
          method: "GET",
        }).then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              console.log(data);
              setUser(data);
            });
          }
        }
        );
    
      }, []);
  return (
    <div className="flex fixed top-0 left-0 w-16 flex-col bg-gray-900 h-screen shadow-lg ">

        {/* Caltrans Logo */}
        <div className="pt-2" >
            <Image src={CaltransLogo} layout="responsive" alt=""  className="pt-16" />
        </div>

        {/* Sidebar Icons*/}
        <SideBarIcon icon={<p> {getUserInitials(user.UserName)}</p>} text={`Logged in as ${user.UserName}`}/>
        <SideBarIcon icon={<FaBug/>} text={"Report a Bug"}/>
        <SideBarIcon icon={<FaTh/>} text={"Dashboard"}/>

        {/* Logout icon at bottom of sidebar */}
        <div className="flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto
        bg-gray-800 text-cyan-700 hover:text-white hover:bg-gray-500 
        rounded-3xl hover:rounded-xl transition-all cursor-pointer group fixed bottom-0" onClick={handleLogout}>
                <FaSignOutAlt/>
                <span className= "sidebar-tooltip group-hover:scale-100 " >Logout</span>
        </div>


    </div>
  )
}


const defaultClickEvent = () => {
    // Do stuff on button click
    console.log("Sidebar button clicked.")
}

const SideBarIcon = ({icon,text="tooltip",clickEvent=defaultClickEvent}) => {
        return (
            <div className="sidebar-icon group" onClick={clickEvent}>
                {icon}
                <span className= "sidebar-tooltip group-hover:scale-100"> {text}</span>
            </div>
        )

}

//Break FullName into Initials : Jared Benitez -> JB
const getUserInitials = (userFullName) =>{
    if(userFullName){
        let initials = userFullName.split(" ").map(name => name[0]).join("")
        return initials
    }
    return "NA"
}

const handleLogout = () => {
    // Logout
    fetch("/ManagerDB/api/logout/", {
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
            // Redirect to UserBase
            window.location.href = "/UserBase"
        });
      }}
    );
}
