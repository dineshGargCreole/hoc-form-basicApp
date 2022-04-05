import React from 'react'
import NameForm from '../name/NameForm'
import ContactForm from '../contact/ContactForm'
import withForm from './FormHOC'


function PersonForm({handleSubmit}) {

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <NameForm />
            <ContactForm />

            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default withForm(PersonForm)