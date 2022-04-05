import React from 'react'
import personContact from './ContactHOC'


function ContactForm({value, handleChange}) {
  return (
    <>
      Phone: <input type='text' value={value.phone} onChange={handleChange} name='phone' required={true} />
      <br/><br/>

      City: <input type='text' value={value.city} onChange={handleChange} name='city' required={true} />
      <br/><br/>
    </>
  )
}


export default personContact(ContactForm)