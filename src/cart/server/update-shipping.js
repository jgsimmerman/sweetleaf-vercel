import Stripe from 'stripe'

export default async function updateShipping({ stripeApiSecret, body, verbose }) {
	
	if(verbose){
		
	}
	const stripe = Stripe(stripeApiSecret)
	if(typeof body === `string`){
		body = JSON.parse(body)
  }
  
  // Start shipping methods
  let info 
  try {
    info = await fetch(infoWebhook, vals)
  }
  catch (err) {
    info = {}
  }
  let subtotal = info.subtotal

	let shippingMethods = []


	// // eslint-disable-next-line no-undef
	// await fetch(`shipWebhook`, {
	// 	method: `post`,
	// 	body: JSON.stringify(shipping),
	// })
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		if (data.errors) {
	// 			throw Error(data.errors)
	// 		}

	// 		shippingMethods = data.shippingOptions.map(option => (
	// 			{
	// 				id: option.id,
	// 				description: option.label,
	// 				value: option.value,
	// 				addInfo: option.addInfo,
	// 			}
	// 		))
	// 	})

	

	let shippingOptions = [
		{
			id: `shipping-0`,
			description: `Priority Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 795
				} else if (subtotal < 4500) {
					return 895
				}
				else if (subtotal < 5000) {
					return 995
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
					return 1595
				} else if (subtotal < 4500) {
					return 1795
				} else if (subtotal < 6000) {
					return 1895
				}
				else if (subtotal < 7500) {
					return 2195
				}
				else if (subtotal < 10500) {
					return 3095
				}
				else if (subtotal < 14000) {
					return 3395
				}
				else if (subtotal < 17500) {
					return 4195
				}
				else if (subtotal < 21000) {
					return 4795
				}
				else if (subtotal < 35000) {
					return 5495
				}
				else if (subtotal < 50000) {
					return 6796
				}
				else if (subtotal < 75000) {
					return 7995
				}
				else if (subtotal <= 100000) {
					return 9695
				}
				else if (subtotal > 100000) {
					return 9695
				}
			},
			addInfo: ``,
		},
		{
			id: `shipping-2`,
			description: `Overnight Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 2995
				} else if (subtotal < 4500) {
					return 3295
				} else if (subtotal < 6000) {
					return 3495
				}
				else if (subtotal < 7500) {
					return 3995
				}
				else if (subtotal < 10500) {
					return 5695
				}
				else if (subtotal < 14000) {
					return 5995
				}
				else if (subtotal < 17500) {
					return 7195
				}
				else if (subtotal < 21000) {
					return 8195
				}
				else if (subtotal < 35000) {
					return 8995
				}
				else if (subtotal < 50000) {
					return 10995
				}
				else if (subtotal < 75000) {
					return 12595
				}
				else if (subtotal <= 100000) {
					return 14995
				}
				else if (subtotal > 100000) {
					return 16995
				}
			},
			addInfo: ``,
		},
	]

	shippingMethods = shippingOptions.map(option => (
		{
			id: option.id,
			description: option.description,
			value: option.value(subtotal),
			addInfo: `${option.addInfo}`,
		}
	))

  //

	// Validate product prices & stock here
	// Create empty result object to be sent later

  let response = {
    "order_update": {
      "items": [
        {
          "parent": null,
          "type": "tax",
          "description": "Sales taxes",
          "amount": 245,
          "currency": "usd"
        }
      ],
      "shipping_methods": [
        {
          "id": "free_shipping",
          "description": "Free 7-day shipping",
          "amount": 0,
          "currency": "usd",
          // Optional delivery estimate and tax items:
          "tax_items": []
        }, 
        {
          "id": "shipping-0",
          "description": "Priority shipping",
          "amount": shippingMethods[0].value,
          "currency": "usd",

          // // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "priority_shipping",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": 49,
          //     "currency": "usd"
          //   }
          // ]
        },
        {
          "id": "shipping-1",
          "description": "Express shipping",
          "amount": shippingMethods[1].value,
          "currency": "usd",

          // // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "express",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": 49,
          //     "currency": "usd"
          //   }
          // ]
        },
        {
          "id": "shipping-2",
          "description": "Overnight shipping",
          "amount": shippingMethods[2].value,
          "currency": "usd",

          // // Optional delivery estimate and tax items:
          // "tax_items": [
          //   {
          //     "parent": "overnight_shipping",
          //     "type": "tax",
          //     "description": "Shipping sales taxes",
          //     "amount": 49,
          //     "currency": "usd"
          //   }
          // ]
        },
      ]
    }
  }

  return response
}