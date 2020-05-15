// https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react?file=/src/index.js:201-298

import addToMailchimp from "gatsby-plugin-mailchimp"
import Button from "../components/Button"

import React, { useState } from 'react';
//import Mailchimp from './Mailchimp';
import Modal from './Modal';

import './wheel.css';


export class WheelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null, 
      email: "",
      disabled: false,
      message: "",
      show: false,
    };
    this.selectItem = this.selectItem.bind(this);
    
    // this.disabled = this.disabled.bind(this);
    // this.message = this.message.bind(this);
  }
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };
  
  handleSubmit = async event => {
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


    event.preventDefault()
    let disabled =true
    let message = "Sending..."
    const response = await addToMailchimp(this.state.email, this.state.selectedItem)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        this.setState({ message: "You're already on to the list!"})
      } else {
        this.setState({ message: "Some error occured while subscribing you to the list."})
      }
      this.setState({ disabled:  false })
    } else {
      // Wheel selectItem call here
      //selectItem();
      this.setState({ message:
        "Thanks! Please check your e-mail and click the confirmation link."
      })
    }
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
      this.showModal();
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
      <>
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            aria-label="Email address"
            className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
            onChange={event => this.setState({email: event.target.value})}
            placeholder="Enter your email"
            required
            type="email"
          />
          <div >
            <Button onClick={this.handleSubmit} disabled={this.disabled}>Sign up</Button>
          </div>
        </form>
        <div>
          {this.message}
        </div>
      </div>

      <div className="wheel-container">
        
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>

        <Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
        
        
      </div>

      
    </>
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
      <div className="Wheel">
        <h2>Sign up to the Sweet Leaf newsletter and win a prize!</h2>
        
        <WheelComponent items={this.places}>
        
        </WheelComponent>
        {/* <Mailchimp /> */}
      </div>
    );
  }
}

// https://codesandbox.io/s/fyu57?file=/src/index.js:3569-4285
