const gravatar = require('gravatar');

export default function gravatarEncoded (email: string) {
  const atPosition = email.indexOf('@');
  const username = email.substring(0, atPosition);
  const domain = email.substring(atPosition, email.length);
  const reversedUsername = username.split('').reverse().join('');
  const newEmail = reversedUsername + domain;
  const avatarUrl = gravatar.url(newEmail, { s: '200', r: 'pg', d: 'robohash' });

  return avatarUrl;
}
