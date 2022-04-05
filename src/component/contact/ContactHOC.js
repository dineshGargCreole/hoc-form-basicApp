import React from 'react'


const personContact = (PassedComponent) =>
    class PersonContact extends React.Component {
        constructor() {
            super()
            this.state = {
                phone: '',
                city: '',
            }
        }

        handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }

        render() {
            return (
                <div>
                    <PassedComponent
                        value={this.state}
                        handleChange={this.handleChange}
                    />
                </div>
            )
        }
    }


export default personContact;