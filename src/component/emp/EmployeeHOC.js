import React from 'react'


const employeeDetail = (PassedComponent) =>
    class EmployeeDetail extends React.Component {
        constructor() {
            super()
            this.state = {
                empId: '',
                email: '',
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
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            )
        }
    }


export default employeeDetail;