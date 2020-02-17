import Stripe from 'stripe'

export default async function updateShipping({ stripeApiSecret, body, verbose }) {
	
	if(verbose){
		
	}
	const stripe = Stripe(stripeApiSecret)
	if(typeof body === `string`){
		body = JSON.parse(body)
  }
  

	let subtotal = body.order.amount
	
	console.log(`Subtotal from updateShipping ${subtotal}`)
	let shippingMethods = []


	let shippingOptions = [
		{
			id: `shipping-0`,
			description: `Priority Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 800
				} else if (subtotal < 4500) {
					return 900
				}
				else if (subtotal < 5000) {
					return 100
				}
				else if (subtotal >= 5000) {
					return 0 //1195
				}
				// else if (subtotal > 7501) {
				// 	return 0
				// }
			},
			addInfo:  `Free priority shipping on orders over $50!`,
		},
		{
			id: `shipping-1`,
			description: `Express Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 1600
				} else if (subtotal < 4500) {
					return 1800
				} else if (subtotal < 6000) {
					return 1900
				}
				else if (subtotal < 7500) {
					return 2200
				}
				else if (subtotal < 10500) {
					return 3100
				}
				else if (subtotal < 14000) {
					return 3400
				}
				else if (subtotal < 17500) {
					return 4200
				}
				else if (subtotal < 21000) {
					return 4800
				}
				else if (subtotal < 35000) {
					return 5500
				}
				else if (subtotal < 50000) {
					return 6800
				}
				else if (subtotal < 75000) {
					return 8000
				}
				else if (subtotal <= 100000) {
					return 9700
				}
				else if (subtotal > 100000) {
					return 9700
				}
			},
			addInfo: ``,
		},
		{
			id: `shipping-2`,
			description: `Overnight Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 3000
				} else if (subtotal < 4500) {
					return 3300
				} else if (subtotal < 6000) {
					return 3500
				}
				else if (subtotal < 7500) {
					return 4000
				}
				else if (subtotal < 10500) {
					return 5700
				}
				else if (subtotal < 14000) {
					return 6000
				}
				else if (subtotal < 17500) {
					return 7200
				}
				else if (subtotal < 21000) {
					return 8200
				}
				else if (subtotal < 35000) {
					return 9000
				}
				else if (subtotal < 50000) {
					return 10100
				}
				else if (subtotal < 75000) {
					return 12600
				}
				else if (subtotal <= 100000) {
					return 15000
				}
				else if (subtotal > 100000) {
					return 17000
				}
			},
			addInfo: ``,
		},
	]

	
	shippingMethods = shippingOptions.map(option => 		
		option.value(subtotal)
		)
	let ship = JSON.parse(JSON.stringify(shippingMethods))
	let ship0 = ship[0]
	let ship1 = ship[1]
	let ship2 = ship[2]

	// Taxes

	let itemTax = Math.ceil(subtotal*.08)

	let tax0 = Math.ceil(ship0*.08)
  let tax1 = Math.ceil(ship1*.08)
	let tax2 = Math.ceil(ship2*.08)

	
	
	// let avaTax = fetch({
	// 	method:'get',
	// 	url:'https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=<COUNTRY>&postalCode=<POSTAL-CODE>',
	// 	headers: {'Authorization': 'Basic ' + <Base64Encoded(AVALARA_ACCOUNT_ID + ':' + AVALARA_LICENSE_KEY)>}
	// })
	// 	.then(function (response) {
	// 		console.log(response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error.response.data);
	// 	});

	// Prepare response
  let response = {
    "order_update": {
      "items": [
        {
          "parent": null,
          "type": "tax",
          "description": "Sales taxes",
          "amount": itemTax,
          "currency": "usd"
        }
      ],
      "shipping_methods": [
        {
          "id": "shipping-0",
          "description": "Priority shipping",
          "amount": ship0,
          "currency": "usd",

          // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "priority_shipping",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": tax0,
          //     "currency": "usd"
          //   }
          // ]
        },
        {
          "id": "shipping-1",
          "description": "Express shipping",
          "amount": ship1,
          "currency": "usd",

          // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "express",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": tax1,
          //     "currency": "usd"
          //   }
          // ]
        },
        {
          "id": "shipping-2",
          "description": "Overnight shipping",
          "amount": ship2,
          "currency": "usd",

          // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "overnight_shipping",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": tax2,
          //     "currency": "usd"
          //   }
          // ]
        },
      ]
    }
  }

  return response
}