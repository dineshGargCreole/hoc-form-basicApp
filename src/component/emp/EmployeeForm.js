import React from 'react'
import employeeDetail from './EmployeeHOC'

function EmployeeForm({value, handleChange}) {
  return (
    <>
      Emp Id: <input type='text' value={value.empId} onChange={handleChange} name='empId' required={true} />
      <br/><br/>

      Email: <input type='email' value={value.email} onChange={handleChange} name='email' required={true} />
      <br/><br/>
    </>
  )
}

export default employeeDetail(EmployeeForm)