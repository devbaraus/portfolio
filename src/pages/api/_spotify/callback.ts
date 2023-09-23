import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code!;

  if (!code) {
    res.status(400).json({
      message: 'code and state are required'
    });
    return;
  }

  const authBasic = Buffer.from(
    `${process.env.NEXT_PRIVATE_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PRIVATE_SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authBasic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: process.env.NEXT_PRIVATE_SPOTIFY_REDIRECT_URI!
    })
  });

  const data = await response.json();

  res.status(200).json(data);
}
