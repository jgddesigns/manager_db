import {FaBell, FaUser, FaHome, FaSignOutAlt, FaBug} from 'react-icons/fa'
import Image from 'next/image'
import CaltransLogo from '../images/caltranslogo-main.png'

export default function Sidebar() {
  return (
    <div className="flex fixed top-0 left-0 w-16 flex-col bg-gray-900 h-screen shadow-lg">
        <div className="pt-2" >
            <Image src={CaltransLogo} layout="responsive" alt=""  className="pt-16" />
        </div>

        <SideBarIcon icon={<FaHome/>} />
        <SideBarIcon icon={<FaUser/>} />
        <SideBarIcon icon={<FaBug/>} />
    </div>
  )
}


const SideBarIcon = ({icon,text="tooltip",clickEvent}) => {
    if(clickEvent) {
        return (
            <div className="sidebar-icon group" onClick={clickEvent()}>
                {icon}
                <span className= "sidebar-tooltip group-hover:scale-100"> {text}</span>
            </div>
        )
    } else {
        return (
            <div className="sidebar-icon group">
                {icon}
                <span className="sidebar-tooltip group-hover:scale-100"> {text}</span>
            </div>
            
        )
    }
}

const SideBarImageIcon = ({src,text="tooltip"}) => {
    return(
        <div className="sidebar-image-icon">
            <Image src={src} alt="" layout="fill"/>
        </div>
    )
}   