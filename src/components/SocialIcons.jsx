import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaReddit,
  FaEtsy,
} from 'react-icons/fa';

const SocialWrapper = styled.span`
  ul {
    display: flex;
    list-style-type: none;
    justify-content: center;
    font-size: 2rem;
  }
  a {
    padding: 1rem 1rem;
    svg {
      color: white;
      &:hover {
        color: hsla(228, 34.9%, 83.1%, 0.3);
      }
    }
  }
`;

const SocialIcons = () => {
  // https://www.johnvincent.io/gatsby/react-icons/

  //const mailToUrl = `mailto:${config.email}?Subject=Hello`;
  const twitterUrl = `http://twitter.com/SweetLeafSuccs`;
  const facebookURL = `https://www.facebook.com/SweetLeafSucculents`;
  const pinterestUrl = `https://www.pinterest.com/sweetleafsucculents0081/`;
  const instagramUrl = `https://www.instagram.com/sweetleafsucculents/`;
  const redditUrl = `https://www.reddit.com/user/SweetLeafSucculents/`;
  const etsyUrl = `https://www.etsy.com/shop/SweetLeafSucculents`;
  //const angelUrl = `https://www.angel.co/${config.angelUsername}`;
  //const rssFeed = `${config.siteUrl}/feed.xml`;
  return (
    <SocialWrapper className="SocialIcon">
      <ul>
        <li>
          <a
            href={twitterUrl}
            target="_blank"
            title="Follow us on Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href={facebookURL}
            target="_blank"
            title="Follow us on Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href={instagramUrl}
            target="_blank"
            title="Follow us on Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>

        <li>
          <a
            href={pinterestUrl}
            target="_blank"
            title="Follow us on Pinterest"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
        </li>
        {/* <li>
          <a
            href={etsyUrl}
            target="_blank"
            title="Follow us on Etsy"
            rel="noopener noreferrer"
          >
            <FaEtsy />
          </a>
        </li> */}
        <li>
          <a
            href={redditUrl}
            target="_blank"
            title="Follow us at Reddit"
            rel="noopener noreferrer"
          >
            <FaReddit />
          </a>
        </li>
      </ul>
    </SocialWrapper>
  );
};

export default SocialIcons;
