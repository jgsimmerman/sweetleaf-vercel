import React, { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { IconContext } from 'react-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { CartQuantity, openCart } from 'cart';

import styles from './styles';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: left;
  a {
    color: ${props => props.theme.colors.white.base};
    margin: 0.5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      text-shadow: 2px 2px 4px black;

      color: ${props => props.theme.colors.white.base};
    }
  }
`;

const Nav2 = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 0.9rem;
  align-items: left;
  text-indent: 2rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin: 0.2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;
const CartQty = styled.div`
  color: ${props => props.theme.colors.white.base};

  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    padding-right: 4px;
    color: ${props => props.theme.colors.white.base};
  }
`;

const Head = styled.h1`
  a {
    color: ${props => props.theme.colors.white.base};
    margin: 0.2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;

const BurgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuStateChange = state => {
    setMenuIsOpen(state.isOpen);
  };

  const handleMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  return (
    <div id="outer-container">
      <Menu
        styles={styles}
        id="push"
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        menuItem="menu-item"
        isOpen={menuIsOpen}
        onStateChange={handleMenuStateChange}
        // onStateChange={(state) => this.handleStateChange(state)}
        noOverlay
        border="0px"
      >
        <div>
          <Head>
            <Link to="/">Sweet Leaf</Link>
          </Head>

          <Nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/care">Care Guides</Link>
            {/* <Link to="/about">About</Link> */}
            <Link to="/catalog">Full Catalog</Link>
            <Nav2>
              <Link to="/catalog/succulents/">All Succulents</Link>
              <Link to="/catalog/succulents/sempervivum">Sempervivum</Link>
              <Link to="/catalog/succulents/echeveria">Echeveria</Link>
              <Link to="/catalog/succulents/rosette">Rosette's</Link>
              <Link to="/catalog/succulents/soft">Soft Succulents</Link>
              <Link to="/catalog/carnivorous-plants">Carnivorous Plants</Link>
              <Link to="/catalog/houseplants">Houseplants</Link>
              <Link to="/catalog/fairy-garden">Fairy Garden Plants</Link>
              <Link to="/catalog/bundles">Bundles</Link>
              


            </Nav2> 
            

            {/* <Nav2>
              <Link to="/catalog/echeveria">Echeveria</Link>
              <Link to="/catalog/sempervivum-heuffelii">
                Sempervivum Heuffelii
              </Link>
              <Link to="/catalog/aeonium">Aeonium</Link>
              <Link to="/catalog/senecio">Senecio</Link>
              <Link to="/catalog/soft-sedum">Soft Sedum</Link>
              <Link to="/catalog/hybrids">Hybrids</Link>
              <Link to="/catalog/more-soft-varieties">More Soft Varieties</Link>
              <Link to="/catalog/carnivorous-plants">Carnivorous Plants</Link>
              <Link to="/catalog/houseplants">Houseplants</Link>

            </Nav2> */}
            <Link to="/about">About</Link>
            <Nav2>
              <Link to="/shipping/">Shipping Policies</Link>
              {/* <Link to="/catalog/houseplants">Houseplants</Link>
              <Link to="/catalog/fairy-garden">Fairy Garden Plants</Link> */}
            </Nav2> 
            {/* <Link to="/blog">Blog</Link>
             */}
           <hr />

            <section>
              <CartQty>
                <IconContext.Provider
                  value={{
                    size: `1rem`,
                  }}
                >
                  <div
                    style={{
                      verticalAlign: `top`,
                      paddingLeft: `2rem`,
                      fontSize: `1rem`,
                    }}
                  >
                    <FaShoppingCart onClick={openCart} />
                    <CartQuantity>
                      {qty => qty>0 &&<React.Fragment>{qty}</React.Fragment>}
                    </CartQuantity>
                  </div>
                </IconContext.Provider>
              </CartQty>
            </section>
            {/* <hr /> */}
            {/* <a
              href="#"
              className="snipcart-user-profile"
              onClick={handleStateChange}
            >
              Log In
            </a>
            Members will be eligible for discounts and coupon codes. */}
          </Nav>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
