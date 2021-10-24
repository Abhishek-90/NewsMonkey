import React, { Component } from 'react'
import loading from "./loading.gif"
import loading1 from './loading1.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-4">
                <img src={this.props.mode === 'dark'? loading1 : loading} alt="loading"/>
            </div>
        )
    }
}

export default Spinner
