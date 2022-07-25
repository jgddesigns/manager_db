import {FaBell, FaUser, FaHome, FaSignOutAlt, FaBug,FaTh} from 'react-icons/fa'
import Image from 'next/image'
import CaltransLogo from '../images/caltranslogo-main.png'

export default function Sidebar() {
  return (
    <div className="flex fixed top-0 left-0 w-16 flex-col bg-gray-900 h-screen shadow-lg ">
        <div className="pt-2" >
            <Image src={CaltransLogo} layout="responsive" alt=""  className="pt-16" />
        </div>
        <SideBarIcon icon={<FaHome/>} text={"Home"}/>
        <SideBarIcon icon={<FaUser/>} text={"Logged in as:"}/>
        <SideBarIcon icon={<FaBug/>} text={"Report a Bug"}/>
        <SideBarIcon icon={<FaTh/>} text={"Dashboard"}/>
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

