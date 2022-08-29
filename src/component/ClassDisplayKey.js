import React, { Component } from 'react'

export class ClassDisplayKey extends Component {

  constructor(props) {
    super(props)

    this.state = {
      keyCode: null
    }
  }

  handleKeyCode = e => {
    this.setState({ keyCode: e.code })
    // console.log(e)
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyCode)
  }

  render() {


    const { keyCode } = this.state;
    console.log(keyCode)
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="text-center">{keyCode}</h1>
        </div>
      </div>
    )
  }
}

export default ClassDisplayKey
