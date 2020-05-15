// https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react?file=/src/index.js:201-298

import addToMailchimp from "gatsby-plugin-mailchimp"
import Button from "../components/Button"

import React, { useState } from 'react';
//import Mailchimp from './Mailchimp';

import './wheel.css';

const Mailchimp = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Sending...")
    const response = await addToMailchimp(email)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("You're already on to the list!")
      } else {
        setMessage("Some error occured while subscribing you to the list.")
      }
      setDisabled(false)
    } else {
      // Wheel selectItem call here
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      )
    }
  }

  return (
    <div >
      
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Email address"
          className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          onChange={event => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
          type="email"
        />
        <div >
          <Button disabled={disabled}>Sign up</Button>
        </div>
      </form>
      <div>
        {message}
      </div>
    </div>
  )
}


export class WheelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      console.log(selectedItem)
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;
    console.log(items[selectedItem])
    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default class Wheel extends React.Component {
  constructor() {
    super();
    this.places = ['5% Off', '10% Off', '$5 Off', '$10 Off', 'Free Fittonia', 'Free Succulent'];
  }

  render() {
    return (
      <div className="App">
        <h1>Sign up to the Sweet Leaf newsletter and win a prize!</h1>
        
        <WheelComponent items={this.places} />
        <Mailchimp />
      </div>
    );
  }
}

// https://codesandbox.io/s/fyu57?file=/src/index.js:3569-4285