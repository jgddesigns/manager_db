import {React, useState, useEffect} from 'react'
import {FaEdit} from 'react-icons/fa'
import  InsertProcess from '../../../utils/helpers/InsertProcess'
import  InsertDataProcess from '../../../utils/helpers/InsertDataProcess'
import { Circles } from 'react-loader-spinner'

export default function Insert({setInsert, setIsInsert}) {
    const [District, setDistrict] = useState('01')
    const [Role, setRole] = useState('Principal')
    const [NewSuperior, setNewSuperior] = useState('Andy Alvarado')
    const [Superiors, setSuperiors] = useState([])
    const [Name, setName] = useState([])
    const [Email, setEmail] = useState([])
    const [EFIS, setEFIS] = useState([])
    const [TRAM, setTRAM] = useState([])
    const [ValidName, setValidName] = useState(true)
    const [ValidEFIS, setValidEFIS] = useState(true)
    const [ValidEmail, setValidEmail] = useState(true)
    const [ValidTRAM, setValidTRAM] = useState(true)
    const [Complete, setComplete] = useState(false)
    const [InsertLoad, setInsertLoad] = useState(false)
    const [IsInsertClicked, setIsInsertClicked] = useState(false)

    useEffect(() => {
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {
             setSuperiors(InsertProcess(data, Role, District))
            })
        })
    }, [])

    const closeHandler = () => {
        setIsInsert(false)
    }
    
    //Calls the function to retrieve manager data, the calls the helper function insertToTable to process and insert the data into the database.
    //@param: None.
    //@return: Void.
    const insertData = () => {
       setInsertLoad(true)
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {                insertToTable(InsertDataProcess(data, NewSuperior, District))
            })
        })
    }

    //Calls the function to retrieve manager data, the calls the helper function insertToTable to process and insert the data into the database.
    //@param a: The results of the insertToTable function. Contains the data to be inserted into the database.
    //@return: Void.    
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
            emp_email: Email,
            emp_tram: TRAM
        }

        if(NameCheck(Name) && EmailCheck(Email) && EFISCheck(EFIS) && TRAMCheck(TRAM)){
            fetch("/ManagerDB/api/insert/", {
                method: "PATCH",
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(insert_data)
            }).then((res) => {
                setValidName(true)
                setValidEmail(true)
                setValidEFIS(true)
                setComplete(true)
                setInsertLoad(false)
                setIsInsertClicked(true)
                fetch("/ManagerDB/api/managers/", {
                    method: "GET",
                }).then((res) => {
                    res.json().then((data) => {
                     setInsert(data)
                     console.log(data)
                    })
                })
            })
        }
        if(!NameCheck(Name)){
            setValidName(false)
            setInsertLoad(false)
        }else{
            setValidName(true)
        }
        if(!EmailCheck(Email)){
            setValidEmail(false)
            setInsertLoad(false)
        }else{
            setValidEmail(true)
        }
        if(!EFISCheck(EFIS)){
            setValidEFIS(false)
            setInsertLoad(false)
        }else{
            setValidEFIS(true)
        }
        if(!TRAMCheck(TRAM)){
            setValidTRAM(false)
            setInsertLoad(false)
        }else{
            setValidTRAM(true)
        }

    }

    //Called from the name change button. Will set the name state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const nameChangeHandler = (e) => {
        setName(e)
    }

    //Called from the email change button. Will set the email state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const emailChangeHandler = (e) => {
        setEmail(e)
    }

    //Called from the district change button. Will set the district state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const districtChangeHandler = (e) => {
        setDistrict(e)
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {
             setSuperiors(InsertProcess(data, Role, e))
             setNewSuperior(InsertProcess(data, Role, e)[0])
            })
        })
    }

    //Called from the role change button. Will set the role state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const roleChangeHandler = (e) => {
        setRole(e)
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {
             setSuperiors(InsertProcess(data, e, District))
             setNewSuperior(InsertProcess(data, e, District)[0])
            })
        })
    }

    //Called from the superior change button. Will set the superior state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const superiorChangeHandler = (e) => {
        setNewSuperior(e)
    }

    //Called from the efis change button. Will set the efis state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const efisChangeHandler = (e) => {
        setEFIS(e)
    }

    //Called from the tram change button. Will set the tram state to the value of the input.
    //@param e: The value of the input.
    //@return: Void.
    const tramChangeHandler = (e) => {
        setTRAM(e)
    }

    //Validates the name input.
    //@param name: The name to validate.
    //@return: True if the name is valid, false otherwise.
    const NameCheck = (name) => {
        if(name.length < 5){
            return false
        }
        for(let i=0; i<name.length; i++){
            if(!name[i].match(/[a-z]/i) && (name[i] != ' ')){
                return false
            }
        }
        return true
    }

    //Validates the email input.
    //@param email: The email to validate.
    //@return: True if the email is valid, false otherwise.
    const EmailCheck = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //Validates the efis input.
    //@param efis: The efis to validate.
    //@return: True if the efis is valid, false otherwise.
    const EFISCheck = (efis) => {
        if(efis.length!=4 || isNaN(efis)){
            return false
          }
          return true
    }

    //Validates the tram input.
    //@param tram: The tram to validate.
    //@return: True if the tram is valid, false otherwise.
    const TRAMCheck = (tram) => {
        if(tram.length!=3 || isNaN(tram)){
            return false
          }
          return true
    }

    //Resets all states to empty. 
    //@param: None.
    //@return: Void.
    const resetData = () => {
        setName([])
        setEmail([])
        setEFIS([])
        setTRAM([])
        setValidName(true)
        setValidEFIS(true)
        setValidEmail(true)
        setValidTRAM(true)
        setComplete(false)
        setDistrict('01')
        setRole('Principal')
        setInsertLoad(false)
        setIsInsertClicked(false)
        fetch("/ManagerDB/api/managers/", {
            method: "GET",
          }).then((res) => {
            res.json().then((data) => {
             setSuperiors(InsertProcess(data, 'Principal', '01'))
            })
        })
    }

    const superiorMap = Superiors.map((name, index) => {
        return {
          manager: Superiors[index]
        }
    })

  return (
    <div>
        <div className="flex w-[40rem] h-[54rem] bg-gray-100 drop-shadow-2xl rounded-xl rounded-tl-[4px] border-[5px] border-[#70AA9B] mb-[10%]  text-black overflow-y-auto">
            <div className="grid grid-rows-2 grid-cols-1 h-[100%]">
                <div className="grid grid-rows-1 grid-cols-2">
                    <div className="bg-[#70AA9B] w-48 h-16 rounded-br-lg z-8">
                        <div className="float-left pl-4 pt-4 text-2xl font-bold text-white">Insert</div>
                    </div>  
                    <div className="ml-[165%] mt-[10%]">
                        <FaEdit className="text-5xl text-[#75a3cc]"/>
                    </div>   
                </div>
                <div className="grid grid-rows-8 gap-y-8 ml-[33%] w-72 mt-[-15%]">
                    <div className="grid grid-cols-2">
                        <span>Name</span>
                        <input className="rounded p-4 h-8 w-56" placeholder="New Employee Name" value={Name} onChange={(e)=>nameChangeHandler(e.target.value)}></input>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <span>Email</span>
                        <input className="rounded p-4 h-8 w-56" placeholder="New Employee Email" value={Email} onChange={(e)=>emailChangeHandler(e.target.value)}></input>
                    </div>
                    <div className="grid grid-cols-2">
                        <span>District</span>
                        <select className="rounded w-56" value={District} onChange={(e)=>districtChangeHandler(e.target.value)}>
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
                        <select className="rounded w-56" value={Role} onChange={(e)=> {roleChangeHandler(e.target.value)}}>
                            <option value="Principal">Principal</option>
                            <option value="Chief">Chief</option>
                            <option value="STE">STE</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <span>Superior</span>
                        <select className="rounded w-56" value={NewSuperior}onChange={(e)=> {superiorChangeHandler(e.target.value)}}>
                    {superiorMap.map(result => {         
                        return (
                            <option className="max-w-[4rem]" value={result.manager}>{result.manager}</option>
                        )
                        })}
                </select>   
                    </div>
                    <div className="grid grid-cols-2">
                        <span>EFIS Unit #</span>
                        <input type="number" value={EFIS} className="rounded p-4 h-8 w-56" placeholder="New EFIS Unit #" onChange={(e)=>{efisChangeHandler(e.target.value)}}></input>
                    </div>
                    <div className="grid grid-cols-2">
                        <span>TRAM Unit</span>
                        <input type="number" value={TRAM} className="rounded p-4 h-8 w-56" placeholder="New TRAM Unit" onChange={(e)=>{tramChangeHandler(e.target.value)}}></input>
                    </div>
                    <div className="grid grid-cols-2  w-[100%]">
                        <button className="bg-[#c6c6c6] text-white p-2 rounded-lg ml-[20%] w-24" onClick={() => {resetData()}}>Reset</button>
                        {!IsInsertClicked?<button className="bg-[#a6a6a6] text-white p-2 rounded-lg ml-[60%] w-24" onClick={() => {insertData()}}>Insert</button> :null}
                    </div>
                    <div className="w-[100%] ml-[28%] text-red-400">
                        {!ValidName ? <div>
                            Name is not valid. (Employee Name)
                        </div>:null} 
                        {!ValidEFIS ? <div>
                            EFIS Unit # is not valid. (1111)
                        </div>:null}
                        {!ValidEmail ? <div>
                            Email is not valid. (abc@gmail.com)
                        </div>:null}
                        {!ValidTRAM ? <div>
                            TRAM Unit is not valid. (111)
                        </div>:null}
                        {Complete ? <div className="ml-16 text-green-400">
                            Insert is complete.
                        </div>:null}
                    </div>
                </div>
                {InsertLoad ? 
                    <div className="fixed z-2 top-[85%] left-[45%]">
                        <Circles
                        height={55}
                        width={55}
                        radius={2}
                        color='#70AA9B'
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                        />
                    </div>
                : null}
                <div className="w-[100%] ml-[33%] text-center mt-[100%] mb-[2%] bottom-0">
                    <span onClick={()=>closeHandler()} className="cursor-pointer h-full underline">Close</span>
                </div>
            </div>
        </div> 
    </div>
  );
}