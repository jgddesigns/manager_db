import React from 'react'

export default function SelectedEmployee({selectedEmployee}) {

    return (
    
        <div>
    
          <div className="ml-64" id="display_title">
              <span className="font-bold text-center">Selected Employee:</span>
          </div>

          <div className="ml-36 grid auto-rows-grid auto-cols-grid" id="display_row"> 
            <div className="grid grid-cols-2">
              <div>
                <span className="font-bold">Name:</span>
              </div>
              <div>
                <span className="color-red-400">{selectedEmployee.emp_name}</span>
              </div>
            </div>
    
            <div className="grid grid-cols-2">
              <div>
                <span className="font-bold">Email:</span>
              </div>
              <div>
                <span className="color-red-400">{}</span>
              </div>
            </div>
    
            <div className="grid grid-cols-2">
              <div>
                <span className="font-bold">Role:</span>
              </div>
              <div>
                <span className="color-red-400">{selectedEmployee.emp_role}</span>
              </div>
            </div>
    
            <div className="grid grid-cols-2">
              <div>
                <span className="font-bold">EFIS:</span>
              </div>
              <div>
                <span className="color-red-400">{selectedEmployee.emp_efis}</span>
              </div>
            </div>
    
            <div className="grid grid-cols-2">
              <div>
                <span className="font-bold">District:</span>
              </div>
              <div>
                <span className="color-red-400">{selectedEmployee.emp_district}</span>
              </div>
            </div>
          </div>
    
        </div>
      );
}
