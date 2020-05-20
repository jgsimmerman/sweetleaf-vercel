import dotenv from 'dotenv'
import { submitStripeInfo } from '../../src/cart/server'
dotenv.config({ silent: true })

// export async function handler({ body }) {

// 	const res = await submitStripeInfo({
// 		stripeApiSecret: process.env.STRIPE_API_SECRET,
// 		body,
// 		verbose: true,
// 	})

// 	// Response
// 	return {
// 		statusCode: 200,
// 		body: JSON.stringify(res),
// 	}
// }

module.exports = (req, res) => {
  let body = req.body,

  const response = await submitStripeInfo({
    stripeApiSecret: process.env.STRIPE_API_SECRET,
		body,
		verbose: true,
  })

  return {
		statusCode: 200,
		body: JSON.stringify(response),
	}
}