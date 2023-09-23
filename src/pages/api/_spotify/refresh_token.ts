import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = process.env.NEXT_PRIVATE_SPOTIFY_REFRESH_TOKEN!;

  if (!refreshToken) {
    res.status(400).json({
      message: 'refresh token is required'
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
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  if (!response.ok) {
    res.status(response.status).json({
      message: 'Failed to refresh token'
    });
    return;
  }

  const data = await response.json();

  res.status(200).json(data);
}
