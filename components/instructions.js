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
        <button onClick={toggle} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-3 rounded">Show Instructions</button>
        <div >
          <ul style={{display: showInstructions ? "block":"none"}} className="text-black bg-300 rounded p-5 mb-3">
            <li> 1. Use the 'Region/District' drop-down to select an employee's location.</li><br/>
            <li> 2. Use the 'EFIS' drop-down to find the employee's EFIS number. </li><br/>
            <li> 3. Click 'Select' to view the employee's info.</li><br/>
            <li> 4. After editing name click 'Submit Edits'.</li><br/>
          </ul>
        </div>
      </>
  )
}
