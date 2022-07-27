
import Button from 'react-bootstrap/Button'




export default function ManagerDBView() {
  return (

    <div className="h-[42rem] p-2 rounded bg-[#70AA9B]">
     <div className="text-white text-2xl pb-2">Retrieved Information:</div>
    <div className="bg-white rounded w-128 h-[38rem] pt-[6rem]">
    </div>
    <div className="text-center p-6">
    <Button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</Button>
    </div>
    </div>

  )
}


const submitEdits = () => {
  // Do stuff on button click
  console.log("Submit Edits button clicked.")
  
  // if(this.value == "Dashboard"){
  //     console.log(this)
  // }
}