import {AiFillQuestionCircle} from 'react-icons/ai'
import {useState} from "react";

export default function NoAccessLoader() {
  const [showInstructions, setShowInstructions] = useState(false);
  function toggle() {
    setShowInstructions(!showInstructions)
  }

  return (
      <>
        {/*<AiFillQuestionCircle size={25} onClick={toggle}/>*/}
        {!showInstructions ? <button onClick={toggle} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-3 rounded">Show Instructions</button> :  <button onClick={toggle} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-3 rounded">Hide Instructions</button> } 
        <div >
          <ul style={{display: showInstructions ? "block":"none"}} className="text-black bg-300 rounded p-5 mb-3 w-[44rem]">
            <li> 1. Search for an employee in the field on the right side of the 'Employees' section.</li><br/>
            <li> 2. To view an employee, click 'Update' on the right side of the row that their name is in.</li><br/>
            <li> 3. Click 'Edit' on the 'Selected Employee' page.</li><br/>
            <li> 4. Enter a new name, email or both. Leaving fields blank will cause their corresponding record(s) to be empty.</li><br/>
            <li> 5. Click 'OK' to select the changes.</li><br/>
            <li> 6. Click 'Save' to make the changes.</li><br/>
          </ul>
        </div>
      </>
  )
}
