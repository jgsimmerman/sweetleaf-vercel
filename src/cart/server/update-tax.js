import { create } from 'apisauce';
/*
  let AVALARA_ACCOUNT_ID="2000167262"
	let AVALARA_LICENSE_KEY="D303D661F7C29A84"
  const postalCode = body.order.shipping.address.postal_code
	let taxRate = createTaxAPI(postalCode)
*/
const createTaxAPI = (postalCode) => {
  const api = create({
    baseURL: 'https://sandbox-rest.avatax.com/api/v2/taxrates/',
    headers: {
      Authorization: `Basic ${new Buffer('2000167262:D303D661F7C29A84', 'utf8').toString('base64')}`,
    },
  });

  const getTaxRate = (postalCode) => api.get(`/bypostalcode?country=US&postalCode=${postalCode}`);

  return {
    getTaxRate,
  };
};
export default createTaxAPI();