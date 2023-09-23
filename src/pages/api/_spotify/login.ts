import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL('https://accounts.spotify.com/authorize');

  url.searchParams.append('client_id', process.env.NEXT_PRIVATE_SPOTIFY_CLIENT_ID!);
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('redirect_uri', process.env.NEXT_PRIVATE_SPOTIFY_REDIRECT_URI!);
  url.searchParams.append(
    'scope',
    'user-read-private,user-read-currently-playing,user-read-recently-played'
  );

  res.redirect(url.toString());
}
