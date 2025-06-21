import type { NextApiRequest, NextApiResponse } from 'next'
import { run } from '../../../lib/connection' 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
        run();
        res.status(200).send("Hello From MangaSwap")
    } catch {
        console.log("Ooops failed connection")
    }
  } else {
    console.log("oops this is diff!")
  }
}