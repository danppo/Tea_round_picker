import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    drinkers: [],
    maker: '',
    input: ''
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let drinkers = this.state.drinkers;
    drinkers.push(this.state.input);
    let input = '';
    console.log(drinkers);
    this.setState({
      drinkers,
      input
    })
  };

  handleShuffle = () => {
    let numbers = this.state.drinkers.length;
    let arrayNumber = Math.floor(Math.random() * (numbers- 0));
    let maker = this.state.drinkers[arrayNumber];
    this.setState({
      maker
    })
  }

  handleClear = () => {
    this.setState({
      maker: '',
      drinkers: [],
      input: ''
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {this.state.maker === "" ? <h1>The Tea Round Picker</h1> : <h1>{this.state.maker}'s making the tea this time</h1>}
          <div>Enter the name of everyone who's having tea on this round</div>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3">
              <input className="form-control form-control-lg" type="text" value={this.state.input } onChange={this.handleChange} />
            </div>
              <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-lg add">Add</button>
          </form>
          <div >
            <ul className="tea-person">
              {this.state.drinkers.map((person,i) =>
                <li key={i}>{person}</li>
              )}
            </ul>
          </div>
          <form className="form-inline">
            <button type="button" onClick={this.handleShuffle} className="btn btn-primary btn-lg btn-success tea-cta">Pick team tea maker</button>
            <button type="button" onClick={this.handleClear} className="btn btn-primary btn-lg btn-warning ">Clear</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
