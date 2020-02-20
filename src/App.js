import React, { Component } from 'react'
import _ from 'lodash';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fac: 0
    }
    this.setStateOnFieldChange = this.setStateOnFieldChange.bind(this);
    this.getFactorialValue = this.getFactorialValue.bind(this);
  }
  setStateOnFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  getFactorialValue(event) {
    event.preventDefault();
    const inpurNumber = this.state.number ? parseInt(this.state.number) + parseInt(1) : '';
    if (inpurNumber) {
      let result = 1;
      const inputArray = _.range(1, inpurNumber);
      _.forEach(inputArray, (val) => {
        result = _.multiply(parseInt(result), parseInt(val));
      });
      this.setState({ fac: result, number: 0 });
    }
  }

  render() {
    const { number, fac } = this.state;
    return (
      <div>
        <div class="container">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">        <h1>Factorial Calculator</h1>
              </a>
            </li>
          </ul>
          <form>
            <div class="container-fluid">
              <div class="form-group">
                <input type="number" name="number" vaule={number} onChange={this.setStateOnFieldChange} placeholder="Enter a number..." class="form-control" />
              </div>
              <button className="btn btn-primary" onClick={this.getFactorialValue}>Calculate Factorial</button>
            </div>
          </form>
          <div className="col-12"><br /></div>
          <div className="col-sm"></div>
          <div className="col-sm">
            <h2>Factorial: {fac ? fac : 'Please Type a Number'}</h2>
          </div>
        </div>
      </div>
    )
  }
}
