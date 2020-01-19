import Stripe from 'stripe'
import noop from '../utils/noop'

export default async function updateShipping({ stripeApiSecret, body, verbose }) {
	let log = noop
	let error = noop
	if(verbose){
		log = console.log
		error = console.error
	}
	const stripe = Stripe(stripeApiSecret)
	if(typeof body === `string`){
		body = JSON.parse(body)
	}

	// Validate product prices & stock here
	log(`submitStripeOrder received from invoke:`, body)

	// Create empty result object to be sent later
	let res = {
		messages: {
			error: [],
		},
		meta: body.meta,
	}

	// Update shipping method
	if (body.shippingMethods) {
		try {
			const req = await stripe.orders.update(res.meta.orderId, {
				shipping_method: body.shippingMethods,
			})
			res.success = true
			log(`updateShipping received from Stripe after updated shipping:`, req)
		}
		catch (err) {
			error(err)
			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
				res.step = `cart`
				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
			}
			else if (err.message) {
				res.messages.error.push(err.message)
			}
			res.success = false
		}
	}


	res = {
		...body,
		...res,
	}

	log(`updateShipping returning:`, res)

	return res
}