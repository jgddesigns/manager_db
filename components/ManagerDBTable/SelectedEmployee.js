import React from 'react'

export default function SelectedEmployee({selectedEmployee}) {

    return (
    
        <div className='w-full'>
            <h2 className="px-4 py-2 text-center w-full text-xl">Selected Employee:</h2>
            <table className="table-auto w-full">
                
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Name:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_name}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Email:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_email}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Role:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_role}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">EFIS:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_efis}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">District:</td>
                        <td className="border px-4 py-2">{selectedEmployee.emp_district}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
}
