import dotenv from 'dotenv'
import {
	statement,
	sendSparkpostConfirmation,
} from '../server'
dotenv.config({ silent: true })

export async function handler({ body }) {

	const res = await statement()

}