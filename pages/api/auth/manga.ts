import type { NextApiRequest, NextApiResponse } from 'next'
import  client   from '../../../lib/connection'
import { insert } from '../../../lib/connection'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
       insert(req.body)
       res.send("Saved")
    }
}


// Louisiana 
// Texas 
// Arkansas 
// Tenesse 
// Oklahoma 