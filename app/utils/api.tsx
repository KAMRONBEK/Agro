import Axios from 'axios';
import sha1 from 'crypto-js/sha1';
import { API_ENDPOINT, APPLICATION_JSON, PARTNER_KEY, PARTNER_ID, API_ENDPOINT_QWERTY, ACCEPT, CONTENT_TYPE, AUTHORIZATION } from 'api';

export const apiClick = Axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    [ACCEPT]: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON
  },
  timeout: 30000
});

export const apiQwerty = Axios.create({
  baseURL: API_ENDPOINT_QWERTY,
  headers: {
    [ACCEPT]: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON
  },
  timeout: 30000
});

export function generateServiceKey(): string {
  let timestamp = Math.floor(Number(new Date()) / 1000);
  const shasum = sha1(timestamp + PARTNER_KEY);

  let service_key = PARTNER_ID + '; ' + shasum + '; ' + timestamp;

  return service_key;
}