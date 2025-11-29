import type { NextApiRequest, NextApiResponse } from 'next'
import  client   from '../../lib/connection'
import { insert, getMangaByName } from '../../lib/connection'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
       insert(req.body)
       res.send("Saved")
    }

    if (req.method == 'GET') {
        
        console.log(getMangaByName(req.body))
        res.send(getMangaByName(req.body))
    }

}
