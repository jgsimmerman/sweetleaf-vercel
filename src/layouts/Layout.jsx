import React, { Fragment } from 'react';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
//import 'typeface-patua-one';
//import 'typeface-merriweather';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO, ZygoteCart } from 'components';
import { NavBar, Footer, BurgerMenu, SocialIcons } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';
//import { Cart, openCart, addToCart, Totals, Zygote, totalsState, State } from '@escaladesports/zygote-cart';
import { Cart, openCart, addToCart, Totals, Zygote, totalsState, State } from 'zygote-cart-clone';


function Loading(props) {
  if (props.error) {
    return <div>Something went wrong! <button onClick= { props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Seems like your net is slow.. <button onClick={ props.retry }>Retry</button> </div>
  } else if (props.pastDelay) {
    return <p>Loading...</p>;
  } else {
    return null;
  }
}

const LoadableBurgerMenu = Loadable({
  loader: () => import('../components/BurgerMenu'),
  loading: Loading,
  delay: 500, // .5 seconds
  timeout: 150000, // 15 seconds
});


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
                        background-color: hsla(228, 34.9%, 88.1%, 0.3);

            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            background-color: hsla(228, 34.9%, 88.1%, 0.3);
          }

          .site {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          .site-content {
            flex-grow: 1;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }

          ${headroom}
        `}
      />
      <SEO />
      {/* <Cart
        stripeApiKey="pk_test_kuLPajeHN54EmoQl9DN6OTXh00Nbu3XDXV"
        orderWebhook="/api/place-order"
        //infoWebhook="/api/info" // Wild Guess. I don't know what I'm doing.

        //let totalCost = {totalsState.state.total}

        // let getShippingCost = () => {
        //   if(totalsState.state.total > 1000){
        //     return shippingCost = 1400
        //   }  
        //   else { return shippingCost = 695}
        // }

        totalModifications={[
          {
            id: `shipping`,
            description: `Shipping`,
            value: 695,
            displayValue: `6.95`,
          },
          // {
          //   id: `tax`,
          //   description: `Tax`,
          //   value: 325,
          //   displayValue: `Calculated at checkout`,
          // },
          
          // {
          //   id: `tax`,
          //   description: `Tax`,
          //   displayValue: `Calculated at checkout`,
          //   value: () => {
          // 	    return totalsState.state.total * 1.08
          //   },
          // }
        ]}
      /> */}
      {/* <LoadableBurgerMenu /> */}
      <div className="site">
        <NavBar />
        <div className="site-content">
          {children}
        </div>
        <Footer />
        <ZygoteCart />
      </div>
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
