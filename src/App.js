import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

class App extends Component {
  
  componentDidMount() { // componentWillMount deprecated

    console.log("hola")
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log("network:",network)
    this.setState({ blockchain: network })

    // Fetch the account (use states of reacts -> store the account with the state object)
    const accounts = await web3.eth.requestAccounts() // tengo que darle permiso desde Metamask
    console.log("account:",accounts[0])
    this.setState({ account: accounts[0]}) // update the state after the account loaded

  }

  // We want to initialize the state
  constructor(props) {
    super(props);
    this.state = {account: ""} // define the account as a string
  }

  render() {
    return (
      <div className="App">
        <header className="container">
          <h1>Hello world</h1>
          <p>Connected to: { this.state.blockchain } </p>
          <p>Your account: { this.state.account } </p>
        </header>
      </div>
    );
  }
  
}

export default App;
