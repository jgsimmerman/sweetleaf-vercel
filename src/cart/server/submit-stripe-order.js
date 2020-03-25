import Stripe from 'stripe'
import noop from '../utils/noop'
import totalsState from '../state/totals'

export default async function submitStripeOrder({ stripeApiSecret, body, verbose }) {
	let log = noop
	let error = noop

	const { subtotal, modifications, total, loading } = this.props.totals

	total = JSON.stringify(total);
	total = JSON.parse(total);
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
	if (body.selectedShippingMethod) {
		try {
			const req = await stripe.orders.update(res.meta.orderId, {
				selected_shipping_method: body.selectedShippingMethod,
			})
			res.success = true
			log(`submitStripeOrder received from Stripe after updated shipping:`, req)
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

		// Pay for order
	// stripe.orders.pay
	// if (body.coupon.length < 2) {
	// 	if (res.success) {
	// 		let req
	// 		try {
	// 			req = await stripe.orders.pay(res.meta.orderId, {
	// 				email: body.infoEmail,
	// 				source: body.payment.id,
	// 			})
	// 			res.success = req.status === `paid`
	// 			log(`submitStripeOrder received from Stripe after order placement:`, req)
	// 		}
	// 		catch (err) {
	// 			error(err)
	// 			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
	// 				res.step = `cart`
	// 				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
	// 			}
	// 			else if (err.message) {
	// 				res.messages.error.push(err.message)
	// 			}
	// 			res.success = false
			
	// 	}
	// }
	// else {
			// Pay for order
		// stripe.charges.create
		if (res.success) {
			let req
			
				req = await stripe.charges.create({
					amount: parseInt(total),
					currency: 'usd',
					description: JSON.stringify(body),
					source: body.payment.id,
				})
				.then(({ status }) => {
					return callback(null, {
						statusCode: 200,
						body: JSON.stringify({ status }),
					});
				})
				.catch(err => {
					return callback(null, {
						statusCode: 400,
						body: JSON.stringify({
							message: `Error: ${err.message}`,
						}),
					});
				})
			}	
		//}
//	}

	res = {
		...body,
		...res,
	}

	log(`submitStripeOrder returning:`, res)

	return res
}