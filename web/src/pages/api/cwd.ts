import type { NextApiRequest, NextApiResponse } from 'next';
import * as config from '../../../config.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ cwd: config.path });
}