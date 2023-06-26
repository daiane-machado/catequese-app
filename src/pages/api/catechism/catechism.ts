import { query as q } from 'faunadb';
import { faunaClient } from '../../../Fauna';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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
    /* const body = JSON.parse(req.body);
    
    //console.log(body)
    let query = await faunaClient.query(
      q.Create(q.Collection('codecatechism'),body)
    );
    res.status(200).json({ data: query }); */
    console.log("requisição temporiamente indisponível")

  }


  if (req.method === 'PUT') {
    /* const body = JSON.parse(req.body);
    const {title, date, time, description, obs, id } = body.data;
   
    try {
      await faunaClient.query(
        q.Update(
          q.Ref(q.Collection('codecatechism'), id), 
          
           {
            data: {
              title: title,
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
    } */
    console.log("requisição temporiamente indisponível")
  }


  //Delete
  if (req.method === 'DELETE') {
/* 
    const body = JSON.parse(req.body);
    const id = body.data;

    try {
      await faunaClient.query(q.Delete(q.Ref(q.Collection('codecatechism'), id)));
      res.status(200).end();
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
 */
    console.log("requisição temporiamente indisponível")
  }

}
