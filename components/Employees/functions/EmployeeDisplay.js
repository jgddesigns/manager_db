import ManagerDBView from "../../ManagerDBForm/ManagerDBView";



export default function EmployeeDisplay(props) {
    
    var display_title = ""
    var name_text = ""
    var email_text = ""
    var role_text = ""
    var efis_text = ""
    var district_text = ""

    if(props.employeeName != ""){
      display_title = "Selected Employee:"
      name_text = "Name:"
      email_text = "Email:"
      role_text = "Role:"
      efis_text = "EFIS:"
      district_text = "District:"

      document.getElementById("display_row").classList.add('gap-4')
      document.getElementById("display_title").classList.add('mb-8')
    }
        
    return (
    
    <div>

      <div className="ml-64" id="display_title">
          <span className="font-bold text-center">{display_title}</span>
      </div>

      <div className="ml-36 grid auto-rows-grid auto-cols-grid" id="display_row"> 
        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">{name_text}</span>
          </div>
          <div>
            <span className="color-red-400">{props.employeeName}</span>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">{email_text}</span>
          </div>
          <div>
            <span className="color-red-400">{}</span>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">{role_text}</span>
          </div>
          <div>
            <span className="color-red-400">{props.employeeRole}</span>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">{efis_text}</span>
          </div>
          <div>
            <span className="color-red-400">{props.employeeEFIS}</span>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">{district_text}</span>
          </div>
          <div>
            <span className="color-red-400">{props.employeeDistrict}</span>
          </div>
        </div>
      </div>

    </div>
  );









}