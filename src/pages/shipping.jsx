import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Shipping = center => (
  <Layout>
    <Helmet title={'Shipping Policies'} />
    <Header title="Shipping Policies"></Header>
    <Container  styles={{textAlign: "left"}}>
      <h3>SHIPPING POLICIES</h3>
      <p>
        All plants are hand picked by us, including any assortments, and hand packaged and wrapped by us. 
        We package plants in a way that should be safe if the plant is dropped from a height of 10 feet or more. 
        We take pride in our packaging and want you to remember Sweet Leaf for providing the best possible care in getting your new plants to you safely. 
      </p>

      <h3>SHIPPING COSTS</h3>
      <p>
        Standard shipping costs are as follows: 
      </p>
      <p>
        <ul>
          <li>All orders up to $30 will be $7.95</li>
          <li>Orders for $30.01 to $45.00 will be $8.95</li>
          <li>Orders for $45.01 - $49.99 will be $9.95</li>
          <li>All orders of $50 or more receive free standard shipping</li>
        </ul>
      </p>
      <p>
        Heat packs and insurance are shipping upgrades. Heat packs are $4 each and insurance is $0.80. 
      </p>
      <p>
        If you need your order faster than the 2 to 4 days (not including the day of shipping) that comes with our standard shipping rates, 
        please message us with a list of the plants you wish to purchase and your zip code so we can calculate exact combined shipping costs 
        for Expedited Shipping thru Fed Ex or Overnight Shipping.
      </p>

      <h3>SHIPPING SCHEDULE</h3>
      <p>We apologize, but currently we cannot ship outside of the continental U.S. </p>
      <p>
        All plants are sent out on Mondays, Tuesdays, Wednesdays, Fridays and sometimes Saturdays, weather permitting and depending on the time that you place your order. 
        Upon placing your order, we will check the weather in your area and determine the best day for shipping to ensure your plant’s safety and notify you if we believe 
        it would be best to add a heat pack so you can have the opportunity to purchase one if you would like. 
        If the weather in your area is fine, we attempt to send orders placed prior to 2PM Eastern time the same day. 
        We do not typically ship on Thursdays to avoid plants sitting an extra day in the post office without light and water. 
        Orders are typically delivered within three days of shipment, but may fluctuate by a day in either direction depending on your location. 
        This is especially the case on orders with standard shipping or during holidays that impact shipping. 
      </p>
      <p>
        If you would like to request a specific shipping date or need to delay your shipment, please let us know prior to noon on your scheduled date of shipping. 
        This is typically done for special orders for events or when you fear you may not be able to get it when you expected. 
      </p>
      
      <h3>PACKAGING</h3>
      <p>
        Here at Sweet Leaf we want to make sure that your plants arrive as happy and healthy as possible. 
        While we have no control over what the carrier does to the plant after it leaves our care, 
        we package our plants in various packaging materials to provide the safest possible journey, 
        even if the package is drop kicked into the back of the truck and left on your porch with the arrows pointing down. 
        We do this by packaging the plant with crinkle paper and/or other packaging material tucked between the leaves and all around the plant so that 
        there is cushioning from every angle,  and support with gentle give to all of the leaves, stems, pitchers or traps. 
        While we do use a new box with every order to help with strength and stability, we try to use other recycled materials whenever possible to 
        help do our part for the environment, while leaving little to no space for plants to be tossed around in the box. 
        Please read the unboxing instructions on the site or in the care guid that is provided with each plant, 
        as we take extraordinary measures with some plants to ensure their safe delivery.
      </p>
      <p>
        We do not schedule pick ups from the carrier and instead take every package to the post office to be scanned in so that tracking can be updated 
        regularly and the plants are not left outside in extreme cold or heat or inclimate weather. You will be provided with a tracking number once your 
        shipping label has been printed, and notification of when the item actually ships so that you can follow along with us from there, 
        and/or set up shipping notifications for your phone/email. 
      </p>

      <h3>INSURANCE </h3>
      <p>
        USPS insurance will NOT cover plants that are damaged in transit or packages that are scanned as being delivered but are no longer there when you go out to get them. USPS insurance will cover packages that go missing in transit, but once scanned as delivered USPS can determine where the package was left within just a few feet, and they will  no longer cover packages delivered to the provided address for any reason. Because of this, we are working with another insurance company to provide you with low cost insurance on your packages, should the plants be harmed in transit or go missing from your home after delivery. 
      </p>
      <p>
        The cost of this insurance is $0.80 per order and requires that you provide us with pictures of the plants and the packaging within 24 hours of arrival. For stolen packages, the insurance company requires a police report if in order to cover the package. The insurance company requires this because theft of the mail, or reporting a package that has been received as missing constitutes fraud and it protects both the buyer and the insurance company, as well as possibly helping to recover your package.
      </p>
      <p>
        Sweet Leaf cannot be responsible for packages that were delivered to the address provided, but the address is incorrect. Additionally, we cannot be responsible for uninsured packages that were delivered to the proper address and go missing, as this is a matter for the police, but please contact us right away if you have received delivery notification so we can attempt to find where your package was left, and if it was improperly delivered or stolen. 
      </p>
      <p>
        Please double check the address you are providing and check with the post office to ensure they are aware that you live there if you are in a new home so that your package is not returned as an invalid address. Packages returned to us due to an incorrect or invalid address will be shipped out again at the cost of the customer or refunded, provided they are returned in proper condition.
      </p>
      <p>
        If insurance is purchased, after receiving your pictures or a copy of your police report if needed,  we will deal with the insurance company while working with you to help find your package or a resolution that is fair to all parties involved.
      </p>

      <h3>WINTER SHIPPING</h3>
      <p>
      While we take every precaution and do everything in our power to ensure that your plants will arrive happy and healthy, during the Winter we have no control over the weather and highly recommend a heat pack if daytime temps are expected to dip below the temperatures that are recommended for your plants. Heat packs last for a minimum of 72 hours and in extreme cold conditions two heat packs might be necessary. If we deem that to be the case and you have only purchased one, or none at all, we will message you to double check that you want the package sent without a heat pack, and we may also contact you to delay shipment or refund your order in full if we do not believe that there is any chance of your plants arriving alive. We would rather lose a sale than lose the faith of our customers and want to give you every opportunity to ensure a safe arrival. Heat packs are $4 each and between our cost of the packs and the added shipping weight we make no profit on these and merely provide them as a service to ensure your plants arrive in good condition. Please understand that Sweet Lead cannot be responsible for damage due to freezing or cold when a heat pack is not purchased. 
      </p>
    </Container>
  </Layout>
);

export default Shipping;

Container.propTypes = {
  center: PropTypes.object,
};
