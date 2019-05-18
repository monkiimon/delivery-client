import React, { Component } from 'react'
import axios from 'axios'

export default class Case1 extends Component {
  state = {
    inputStart: '',
    inputEnd: '',
    inputMaxRoutes: '',
    possible: {},
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFetch = () => {
    const { inputStart, inputEnd, inputMaxRoutes } = this.state
    axios
      .post(`${process.env.REACT_APP_DELIVERY_API_ENDPOINT}delivery/possible`, {
        start: inputStart,
        end: inputEnd,
        maxRoutes: inputMaxRoutes,
      })
      .then(({ data: { possible } }) => {
        this.setState({ possible })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit = () => {
    this.handleFetch()
  }
  render() {
    const { inputStart, inputEnd, possible } = this.state
    const disabledBtn = !!inputStart && !!inputEnd ? false : true
    return (
      <div className="container">
        <div className="card bg-light mb-5">
          <div className="card-header">Case 2 &amp; Case 3</div>
          <div className="card-body">
            <h5 className="card-title">
              Calculate​ ​the​ ​number​ ​of​ ​possible​ ​delivery​ ​route.
            </h5>
            <h5 className="card-title">
              Calculate​ ​the​ ​cheapest​ ​delivery​ ​route​ ​between​ ​two​
              ​town.
            </h5>
            <span>Input delivery route</span>
            <div className="card-text">
              <div className="col-md-3">
                <div className="mb-3">
                  <div>Start</div>
                  <div className="fs-12">Example: E</div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Start route"
                    name="inputStart"
                  />
                </div>
                <div className="mb-3">
                  <div>End</div>
                  <div className="fs-12">Example: D</div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="End route"
                    name="inputEnd"
                  />
                </div>
                <div className="mb-3">
                  <div>Max routes (optional)</div>
                  <div className="fs-12">Example: 4</div>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Max routes (optional)"
                    name="inputMaxRoutes"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-dark mt-3"
                    disabled={disabledBtn}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  {!!possible.amount && (
                    <div className="my-5">
                      <h4 className="mb-3">Possible routes</h4>
                      <div> Amount: {possible.amount}</div>
                      <div> Routes: </div>
                      <div className="ml-2">
                        <div>
                          <ul>
                            {possible.routes.map(r => (
                              <li key={r}>{r.join('-')}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div> Cheapest: </div>
                      <div className="ml-4">
                        <div> - Price: {possible.cheapest.price}</div>
                        <div> - Routes: </div>
                        <div>
                          <ul>
                            {possible.cheapest.routes.map(r => (
                              <li key={r}>{r.join('-')}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
