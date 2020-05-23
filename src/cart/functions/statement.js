import dotenv from 'dotenv'
import {
	statement,
	sendSparkpostConfirmation,
} from '../server'
dotenv.config({ silent: true })

export async function handler(req, res) {

  const res = await statement(req, res)
  console.log('res.statusCode', res.statusCode)

  return res
}