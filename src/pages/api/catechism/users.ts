import { query as q } from 'faunadb';
import { faunaClient } from '../../../Fauna';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(  req: NextApiRequest, res: NextApiResponse) {


  //list data
  if (req.method == 'GET') {
    
    let query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('userscatechism'))),
        q.Lambda((user) => q.Get(user))
        )
        );
        res.status(200).json({ data: query });
        ;
  }
}