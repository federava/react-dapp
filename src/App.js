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
    
    const weibalance = await web3.eth.getBalance(accounts[0])
    const ethbalance = web3.utils.fromWei(weibalance, "ether")
    console.log(web3.utils.fromWei(weibalance, "ether") + " ETH")
    this.setState({ balance: ethbalance })

    /*
    web3.eth.getBalance(accounts[0], function(err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(web3.utils.fromWei(result, "ether") + " ETH")
        const balance = web3.utils.fromWei(result, "ether")
        this.setState({ balance: balance})
      }
    })
    */


    /*
    // Fetch NFTs
    const nfts = await ERC721.methods.userOwnedTokens.call(accounts[0])
    console.log("NFTs:",nfts)
    */
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
          <p>ETH balance: { this.state.balance } </p>
        </header>
      </div>
    );
  }
  
}

export default App;
