import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Privacy = center => (
  <Layout>
    <Helmet title={'Privacy Policies'} />
    <Header title="Privacy Policies"></Header>
    <Container styles={{ textAlign: 'left' }}>
      <div style={{ color: '#232b2b' }}>
        <h1>Sweet Leaf Succulents and Ornamental Plants, LLC Privacy Policy</h1>

        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          sweetleafsucculents.com (the “Site”).
        </p>

        <h2>PERSONAL INFORMATION WE COLLECT</h2>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <ul>
          <li>
            {' '}
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org.
          </li>
          <li>
            {' '}
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            {' '}
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </li>
        </ul>
        <p>
          Additionally when you make a purchase or attempt to make a purchase
          through the Site, we collect certain information from you, including
          your name, billing address, shipping address, payment information
          (including credit card numbers ), email address, and phone number. We
          refer to this information as “Order Information.”
        </p>
        <p>
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
        </p>

        <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>

        <p>
          We use the Order Information that we collect generally to fulfill any
          orders placed through the Site (including processing your payment
          information, arranging for shipping, and providing you with invoices
          and/or order confirmations). Additionally, we use this Order
          Information to: Communicate with you; Screen our orders for potential
          risk or fraud; and When in line with the preferences you have shared
          with us, provide you with information or advertising relating to our
          products or services.
        </p>
        <p>
          Your payment information (i.e. credit card number, etc.), including
          CSV numbers or other fraud-reducing details (please note that Lootly
          does not store this information, and is instead processed
          automatically by our payment provider – Stripe. For any questions
          related to how cards are processed, please contact Stripe directly.).
        </p>

        <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>

        <h2>SHARING YOUR PERSONAL INFORMATION</h2>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above. We also use Google
          Analytics to help us understand how our customers use the Site--you
          can read more about how Google uses your Personal Information here:
          https://www.google.com/intl/en/policies/privacy/. You can also opt-out
          of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
        </p>
        <p>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>

        <p>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:
          http://optout.aboutads.info/.
        </p>
        <h2>DO NOT TRACK</h2>
        <p>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>

        <h2>DATA RETENTION</h2>
        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>

        <h2>CHANGES</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>

        <h2>CONTACT US</h2>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, contact us by
          e-mail at sweetleafsucculents@gmail.com or by mail using the details
          provided below:
        </p>

        <p>
          <address>
            Sweet Leaf Succulents and Ornamental Plants, LLC<br></br>
            104 S Darlington Avenue <br></br>
            Lamar, SC, 29069 <br></br>
            United States <br></br>
          </address>
        </p>
      </div>
    </Container>
  </Layout>
);

export default Privacy;

Container.propTypes = {
  center: PropTypes.object,
};
