

export default function ManagerDBForm({searchResults}) {
  const results = Object.values(searchResults)
  return (
    <div>
    <div className="h-[30rem] max-h-[30rem] p-2 rounded bg-[#70AA9B] w-96">
      <div className="text-white text-2xl pb-2">Search Results:</div>
     
    <div className="bg-white text-black rounded w-128 max-w-128 h-[26rem] ">
    {results.map(employee => {
        return (
          <div>
            <h2>{employee}</h2>


            <hr />
          </div>
        );
      })}
  
    </div>


    </div>
    </div>

  )
}
