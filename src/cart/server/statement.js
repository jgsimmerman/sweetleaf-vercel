import { Magic } from '@magic-sdk/admin'
const magic = new Magic('sk_test_C9795F33831A21B8')


export default async (req, res) => {
  const magicToken = (req.headers.authorization || '').replace('Bearer ', '')
   
  // Authorize the request
  const metadata = await magic.users.getMetadataByToken(magicToken)
  
  // send the statement
  res.statusCode = 200
  res.json({ balance: 3000, email: metadata.email })

  return callback
}