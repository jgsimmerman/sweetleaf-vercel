import dotenv from 'dotenv';
import { members, sendSparkpostConfirmation } from '../server';
dotenv.config({ silent: true });

import useMagicLink from 'use-magic-link';
import { Magic } from '@magic-sdk/admin';
//const magic = new Magic('sk_test_C9795F33831A21B8');


export async function handler(event, context, callback) {

  const magicSecretKey = 'sk_test_C9795F33831A21B8' //process.env.MAGIC_SECRET_KEY
  const res = await members(event, magicSecretKey)
  
  
  return res
}
