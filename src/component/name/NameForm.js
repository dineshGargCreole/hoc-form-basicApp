import React from 'react'
import personName from './NameHOC'


function NameForm({value, handleChange}) {
  return (
    <>
      First Name: <input type='text' value={value.firstName} onChange={handleChange} name='firstName' required={true} />
      <br/><br/>

      Last Name: <input type='text' value={value.lastName} onChange={handleChange} name='lastName' required={true} />
      <br/><br/>
    </>
  )
}



export default personName(NameForm)