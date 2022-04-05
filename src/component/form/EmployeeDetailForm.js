import React from 'react'
import NameForm from '../name/NameForm'
import ContactForm from '../contact/ContactForm'
import EmployeeForm from '../emp/EmployeeForm'
import withForm from './FormHOC'

function EmployeeDetailForm({handleSubmit}) {

  return (
    <form onSubmit={handleSubmit}>
      <NameForm />
      <ContactForm />
      <EmployeeForm />

      <input type='submit' value='Submit' />
    </form>
  )
}

export default withForm(EmployeeDetailForm)