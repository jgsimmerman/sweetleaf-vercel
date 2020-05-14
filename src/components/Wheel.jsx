// https://codesandbox.io/s/github/hadriengerard/spinning-wheel-game-react?file=/src/index.js:201-298
 
import React from 'react';
import Mailchimp from './Mailchimp';

import './wheel.css';

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
