import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { currentUser } = await serverAuth(req);

  return res.status(200).json(currentUser);

  try {
  } catch (error) {
    console.error(error);
    return res.status(400).end;
  }
}
