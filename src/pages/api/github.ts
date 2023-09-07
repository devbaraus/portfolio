import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/core';

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: process.env.NEXT_PRIVATE_GITHUB_TOKEN
  });

  const { data } = await octokit.request('GET /user', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  res.status(200).json(data);
}
