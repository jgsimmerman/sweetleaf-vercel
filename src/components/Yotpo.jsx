import React from 'react';

export default class Yotpo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      sku: "",
      price: "",
      title: "",
      path: "",
      pic: "",
    };
  }

  componentDidUpdate() {
    if (typeof window.yotpo !== "undefined") {
      window.yotpo.initWidgets();
    }
  }

  render() {
    let {sku, price, title, path, pic} = this.state

    return(
      <div class="yotpo yotpo-main-widget" 
        data-product-id={sku} 
        data-price={price} 
        data-currency="USD" 
        data-name={title} 
        data-url={`https://sweetleafsucculents.com${path}`} 
        data-image-url={pic}
      > 
      </div>
    )
  }

}