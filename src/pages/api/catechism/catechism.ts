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
 /*  if (req.method == 'PUT') {
    const body = JSON.parse(req.body);
    let query = await faunaClient.query(
      q.Update(
        q.Select(
          ['ref'],
          q.Get(q.Match(q.Index('dcf8f8a6-2103-f84c-e532-28d173458a54'), body.id))
        ),
        {
          data: {
            watched: body.watched,
          },
        }
      )
    );
    res.status(200).json({data: query})
  }
 */

  if (req.method === 'PUT'){
    console.log('estou no PUT')
    const body = JSON.parse(req.body);
    const {title, date, time, description, obs, id } = body.data;
    console.log(typeof(title))
      console.log(id)

    try {
      await faunaClient.query(
        q.Update(
          q.Ref(q.Collection('codecatechism'), id), 
          
           {
            data: {
              
              date: date,
              time: time,
              description: description,
              obs: obs
            }
          }
           
           )
           )
           console.log("ok ok")
      res.status(200).end();
    } catch (e: any) {
      res.status(500).json(e.message );
    }
  }


  //Delete
  if (req.method === 'DELETE'){
    const body = JSON.parse(req.body);
    const {title, date, time, description, obs } = body.data;

  try {
    await faunaClient.query(q.Delete(q.Ref(q.Collection('customers'),title)));
    res.status(200).end();
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }

  }

  /* if (req.method == 'PUT') {
   console.log('tentando PUT')
    const body = JSON.parse(req.body);
    let query = await faunaClient.query(
      q.Update(
        q.Select(
          ['ref'],
          q.Get(q.Match(q.Index('dcf8f8a6-2103-f84c-e532-28d173458a54'), body.id))
        ),
        {
          data: {
            watched: body.watched,
          },
        }
      )
    );
    res.status(200).json({ data: query });
  }  */

}
