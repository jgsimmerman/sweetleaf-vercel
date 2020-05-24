import dotenv from 'dotenv'
import {
	statement,
	sendSparkpostConfirmation,
} from '../server'
dotenv.config({ silent: true })
import useMagicLink from 'use-magic-link'
import { Magic } from '@magic-sdk/admin'
const magic = new Magic('sk_test_C9795F33831A21B8')

export async function handler(event, context, callback) {

  const magicToken = (event.headers.authorization).substring(7)
   
  // Authorize the request
  const metadata = await magic.users.getMetadataByToken(magicToken)

  return {
    statusCode: 200,
    body: JSON.stringify({ balance: 3000, email: metadata.email })
  }
}