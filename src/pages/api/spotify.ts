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

  // Fetch currently playing track
  const currentlyPlayingResponse = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${data.access_token}`
      }
    }
  );

  let currentlyPlayingData = null;

  if (currentlyPlayingResponse.ok && [200, 201].includes(currentlyPlayingResponse.status)) {
    currentlyPlayingData = await currentlyPlayingResponse.json();
    currentlyPlayingData = currentlyPlayingData.item;
  }

  // Fetch recently played tracks (last 1)
  const recentlyPlayedResponse = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: {
        Authorization: `Bearer ${data.access_token}`
      }
    }
  );

  let recentlyPlayedData = await recentlyPlayedResponse.json();
  recentlyPlayedData = recentlyPlayedData.items[0];

  if (!recentlyPlayedResponse.ok) {
    res.status(recentlyPlayedResponse.status).json({
      message: 'Failed to fetch mostly recently played track'
    });
    return;
  }

  res.status(200).json({
    currentlyPlaying: currentlyPlayingData,
    recentlyPlayed: recentlyPlayedData
  });
}
