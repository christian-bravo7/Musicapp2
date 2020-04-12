import { IncomingMessage, ServerResponse } from 'http';
import { stringify } from 'qs';
require('dotenv').config();

function generateRandomString (length: number): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default function (req: IncomingMessage, res: ServerResponse, next: Function) {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  const queryParams = stringify({
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
    scope,
    state,
  });

  const authURL = `${process.env.API_URL}/authorize?${queryParams}`;

  res.writeHead(301,
    { Location: authURL }
  );

  res.end();
  next();
}
