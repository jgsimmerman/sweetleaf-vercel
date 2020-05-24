import { Magic } from '@magic-sdk/admin'



export default async function members(event, magicSecretKey) {
  const magic = new Magic(magicSecretKey)
  const magicToken = event.headers.authorization.substring(7);

  // Authorize the request
  const metadata = await magic.users.getMetadataByToken(magicToken);
  console.log('members.js', metadata);

  return {
    statusCode: 200,
    body: JSON.stringify({ balance: 3000, email: metadata.email }),
  };
}