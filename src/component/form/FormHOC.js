import React from 'react'

const withForm = (PassedComponent) =>
    class extends React.Component {

        constructor(props){
            super(props)
        }

        handleSubmit = (e) => {
            e.preventDefault();
            for(let i=0; i<e.target.length-1; i++) {
                console.log(`${e.target[i].name} : ${e.target[i].value}`)
                e.target[i].value = ''
            }
        }

        render() {
            return (
                <PassedComponent
                    {...this.props}
                    handleSubmit = {this.handleSubmit}
                />
            )
        }
    }


export default withForm