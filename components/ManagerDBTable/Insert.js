
import {React, useState, useEffect} from 'react'
import {FaEdit} from 'react-icons/fa'
import  HierarchyProcess from '../../utils/helpers/HierarchyProcess'
import  InsertProcess from '../../utils/helpers/InsertProcess'
import  InsertDataProcess from '../../utils/helpers/InsertDataProcess'
import  EmailCheck from '../../utils/validate/EmailCheck'
import  EFISCheck from '../../utils/validate/EFISCheck'



export default function Insert({setIsInsert, setInsertStart}) {
    const [District, setDistrict] = useState('01')
    const [Role, setRole] = useState('Principal')
    const [NewSuperior, setNewSuperior] = useState([])
    const [Superiors, setSuperiors] = useState([])
    const [Name, setName] = useState([])
    const [Email, setEmail] = useState([])
    const [EFIS, setEFIS] = useState([])
    const [ValidEFIS, setValidEFIS] = useState(true)
    const [ValidEmail, setValidEmail] = useState(true)
    const [RowData, setRowData] = useState([])
    const closeHandler = () => {

        setIsInsert(false)
    
    
       }


       useEffect(() => {

        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {

             setSuperiors(InsertProcess(data, Role, District))

            })

        })
        
      }, [])





    const insertData = () => {

       

        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {

          
                setRowData(InsertDataProcess(data, NewSuperior, District))
                insertToTable(InsertDataProcess(data, NewSuperior, District))
                
            })
           

        })

   
       
    }

    const insertToTable = (a) => {
   
        const insert_data = {
            region: a['REGION'],
            district: a['DISTRICT'],
            tram: a['TRAM'],
            efis: a['EFIS'],
            deputy_name: a['DEPUTY_NAME'],
            deputy_email: a['DEPUTY_EMAIL'],
            prin_unit: a['PRIN_UNIT'],
            prin_efis: a['PRIN_EFIS'],
            prin_name: a['PRIN_NAME'],
            prin_email: a['PRIN_EMAIL'],
            chief_unit: a['CHIEF_UNIT'],
            chief_efis: a['CHIEF_EFIS'],
            chief_name: a['CHIEF_NAME'],
            chief_email: a['CHIEF_EMAIL'],
            ste_unit: a['STE_UNIT'],
            ste_efis: a['STE_EFIS'],
            ste_name: a['STE_NAME'],
            ste_email: a['STE_EMAIL'],
            supervisor_name: NewSuperior,
            emp_role: Role,
            emp_district: District,
            emp_efis: EFIS,
            emp_name: Name,
            emp_email: Email
        }

        console.log(insert_data)



        if(EmailCheck(Email) && EFISCheck(EFIS)){
            fetch("/ManagerDB/api/insert/", {
                method: "PATCH",
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(insert_data)
            }).then((res) => {

                setValidEmail(true)
                setValidEFIS(true)
        

                })
        }
        if(!EmailCheck(Email)){
            setValidEmail(false)

        }
        if(!EFISCheck(EFIS)){
            setValidEFIS(false)
      
        }

    }

    const nameChangeHandler = (e) => {
        setName(e)
    }


    const emailChangeHandler = (e) => {
        setEmail(e)
    }

    const districtChangeHandler = (e) => {

        setDistrict(e)

        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {

             setSuperiors(InsertProcess(data, Role, e))
             setNewSuperior(InsertProcess(data, Role, e)[0])
             setRowData(InsertDataProcess(data, NewSuperior, e))

             


            })

        })
        

    }


    const roleChangeHandler = (e) => {

        

        setRole(e)

        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {

             setSuperiors(InsertProcess(data, e, District))
             setNewSuperior(InsertProcess(data, e, District)[0])
             setRowData(InsertDataProcess(data, NewSuperior, District))
             

             


            })

        })
    }

    const superiorChangeHandler = (e) => {
        setNewSuperior(e)
    }

    const efisChangeHandler = (e) => {
        setEFIS(e)
    }




    const superiorMap = Superiors.map((name, index) => {
        return {
          manager: Superiors[index]
        }
      })



  return (
    <div>
        <div className="flex w-[40rem] h-[48rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] text-black overflow-y-auto mb-[10%]">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Insert</div>
                       
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaEdit className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
             
                <div className="grid grid-rows-7 gap-y-16 ml-24 w-72">
                    <div className="grid grid-cols-2">
                        <span>Name</span>
                        <input className="p-4 h-8 w-56" placeholder="New Employee Name" onChange={(e)=>nameChangeHandler(e.target.value)}></input>
                    </div>

                    <div className="grid grid-cols-2 ">
                        <span>Email</span>
                        <input className="p-4 h-8 w-56" placeholder="New Employee Email" onChange={(e)=>emailChangeHandler(e.target.value)}></input>
                    </div>

                    <div className="grid grid-cols-2">
                        <span>District</span>
                        <select className="w-56" onChange={(e)=>districtChangeHandler(e.target.value)}>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                    </div>

                    <div className="grid grid-cols-2 ">
                        <span>Role</span>
                        <select className="w-56" onChange={(e)=> {roleChangeHandler(e.target.value)}}>
                            <option value="Principal">Principal</option>
                            <option value="Chief">Chief</option>
                            <option value="STE">STE</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 ">
                        <span>Superior</span>
                        <select className="w-56" onChange={(e)=> {superiorChangeHandler(e.target.value)}}>
                    {superiorMap.map(result => {
                        
                        return (
                            <option className="max-w-[4rem]" value={result.manager}>{result.manager}</option>
                        )
                        })}
                </select>

                       
                    </div>

                    <div className="grid grid-cols-2 ">
                        <span>EFIS UNIT #</span>
                        <input type="number" className="p-4 h-8 w-56" placeholder="New EFIS UNIT #" onChange={(e)=>{efisChangeHandler(e.target.value)}}></input>
                    </div>

                    <div>
                        <button className="bg-[#a6a6a6] text-white p-4 rounded-lg ml-[100%]" onClick={() => {insertData()}}>Insert</button>
                    </div>

                    <div>
                        {!ValidEFIS ? <div>
                            EFIS is not valid.
                        </div>:null}
                        {!ValidEmail ? <div>
                            Email is not valid.
                        </div>:null}
                    </div>


                </div>




                <div className="w-[100%] ml-[33%] text-center mt-[100%] mb-[2%] bottom-0">
                    <span onClick={()=>closeHandler()} className="cursor-pointer h-full underline">Close</span>
                </div>
            </div>
        </div> 
    </div>


  );
}