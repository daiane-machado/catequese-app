import { query as q } from 'faunadb';
import { faunaClient } from '../../../Fauna';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(  req: NextApiRequest, res: NextApiResponse) {
  console.log("req.body")
  //console.log(res)

  //list data
  if (req.method == 'GET') {
    let query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('codecatechism'))),
        q.Lambda((catechism) => q.Get(catechism))
        )
        );
        res.status(200).json({ data: query });
        ;
  }

  //add data
  if (req.method == 'POST') {
    const body = JSON.parse(req.body);
    console.log(body)
    let query = await faunaClient.query(
      q.Create(q.Collection('codecatechism'),body)
    );
    res.status(200).json({ data: query });
  }
  
  //update data
  if (req.method == 'POST') {
    const body = JSON.parse(req.body);
    let query = await faunaClient.query(
      q.Update(
        q.Select(
          ['ref'],
          q.Get(q.Match(q.Index('shows_by_title'), body.title))
        ),
        {
          data: {
            watched: body.watched,
          },
        }
      )
    );
    res.status(200).json({ data: query });
  }
};

