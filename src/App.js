import React from 'react'

import Case1 from './Case1'
import Case23 from './Case23'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">​ Delivery​ ​Service</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      <div className="container body-page my-5">
        <div
          className="card card-body bg-light mb-5"
          style={{ border: 'none' }}
        >
          Fixed Routes: AB1,​ ​​ ​AC4,​ ​AD10,​ ​BE3,​ ​CD4,​ ​CF2,​ ​DE1,​
          ​EB3,​ ​EA2,​ ​FD1
        </div>
        <Case1 />
        <Case23 />
      </div>
    </div>
  )
}

export default App
