import React from 'react'


const personName = (PassedComponent) =>
    class PersonName extends React.Component {
        constructor() {
            super()
            this.state = {
                firstName: '',
                lastName: '',
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


export default personName;