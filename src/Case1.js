import React, { Component } from 'react'
import axios from 'axios'

export default class Case1 extends Component {
  state = {
    input: '',
    cost: 0,
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  handleFetch = () => {
    axios
      .post('http://localhost:9000/api/v1/delivery/cost', {
        route: this.state.input,
      })
      .then(({ data: { cost } }) => {
        if (cost === 0) {
          cost = -1
        }
        this.setState({ cost })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit = () => {
    this.handleFetch()
  }
  render() {
    const { input, cost } = this.state
    const disabledBtn = !!input ? false : true
    return (
      <div className="container">
        <div className="card bg-light mb-5">
          <div className="card-header">Case 1</div>
          <div className="card-body">
            <h5 className="card-title">
              Calculate​ ​the​ ​delivery​ ​cost​ ​of​ ​the​ ​given​ ​delivery​
              ​route.
            </h5>
            <span>Input delivery route</span>
            <br />
            <span>Example</span>
            <br />
            <ul>
              <li>A-B-E</li>
              <li>A-D</li>
              <li>E-A-C-F</li>
              <li>A-D-F</li>
            </ul>
            <div className="card-text">
              <div className="col-md-5">
                <div className="input-group mb-3">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Input delivery route"
                  />
                  <div className="input-group-append">
                    <button
                      onClick={this.handleSubmit}
                      className="btn btn-dark"
                      type="button"
                      disabled={disabledBtn}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {cost > 0 && (
                  <div className="my-2">
                    <h4>Cost: {cost}</h4>
                  </div>
                )}
                {cost < 0 && (
                  <div className="my-2">
                    <h4>No​ ​Such​ ​Route</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
