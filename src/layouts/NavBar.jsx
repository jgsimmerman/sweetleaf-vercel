import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { IconContext } from 'react-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Zygote } from 'components';
import { CartQuantity, openCart } from 'cart';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;
const CartQty = styled.div`
    color: ${props => props.theme.colors.white.base};
    
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      padding-right: 4px;
      color: ${props => props.theme.colors.white.base};
    }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      padding-right: 4px;
      color: ${props => props.theme.colors.white.base};
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

/******************************************
 *
 * Commented Out NavBar media query
 *
 * Remember to undo the commenting out!!!!
 *
 * IMPORTANT
 *
 *******************************************/
const NavBar = props => (
  <>
    <Headroom calcHeightOnResize disableInlineStyles>
      {/* <StyledLink to="/">
        <img src="" alt="" />
      </StyledLink> */}
      <div></div>
      <Nav>
        <Link to="/#">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/blog">Blog</Link> */}
        <div> {`  `} </div>
        <CartQty>
          <IconContext.Provider
            value={{
              size: `1rem`,
            }}
          >
            <div style={{
                  verticalAlign: `top`,
                  paddingLeft: `2rem`,
                  fontSize: `1rem`,

                }}>
              <FaShoppingCart onClick={openCart} />
              <CartQuantity>
                {qty => <React.Fragment >{qty}</React.Fragment>}
              </CartQuantity>
            </div>
          </IconContext.Provider>
        </CartQty>
      </Nav>
    </Headroom>
  </>
);

export default NavBar;
