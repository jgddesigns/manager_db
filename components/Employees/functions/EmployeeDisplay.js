import ManagerDBView from "../../ManagerDBForm/ManagerDBView";



export default function EmployeeDisplay(name, efis) {
 
    var name = name

    document.getElementById('info_row').hidden = true;
    document.getElementById('display_row').hidden = false;

    document.getElementById('display_row').innerHTML = '\
    <div>\
    <button>'+name+'</button>\
    \
    </div>'

        
    return (
    <div>
    </div>

        //   <div className="ml-100">
    //   <div>
    //     <div>
    //       <span className="font-bold">{name_text}</span>
    //     </div>
    //     <div>
    //       <input className="color-red-400">{employeeName}</input>
    //     </div>
    //   </div>
    
    // </div>
  );









}