import dotenv from 'dotenv'
import {
	statement,
	sendSparkpostConfirmation,
} from '../server'
dotenv.config({ silent: true })

export async function handler(req) {

	const res = await statement(req)
  return res
}