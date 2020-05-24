import { Magic } from '@magic-sdk/admin';

const Lightrail = require('lightrail-client');
import * as uuid from 'uuid';

export default async function members(event) {
  //  START MAGIC AUTH
  const magic = new Magic('sk_test_C9795F33831A21B8');
  const magicToken = event.headers.authorization.substring(7);

  // Authorize the request
  const metadata = await magic.users.getMetadataByToken(magicToken);
  console.log('members.js', metadata);
  //  END MAGIC AUTH
  // START LIGHTRAIL
  // Create Contact
  try {
    const contact = await Lightrail.contacts.listContacts({
      email: {
        eq: metadata.email,
      },
    });
  } catch {
    const newContact = {
      id: uuid.v4().substring(0, 24),
      email: metadata.email,
    };
    const contact = await Lightrail.contacts.createContact(newContact);
  } finally {
    contactId = contact.id
  }

  const contactValuesList = await Lightrail.contacts.listContactsValues(contact)

  return {
    statusCode: 200,
    body: JSON.stringify({ contactId: contactId, email: metadata.email }),
  };
}
