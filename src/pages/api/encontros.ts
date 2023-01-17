// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(  req: NextApiRequest, res: NextApiResponse) {

  const catechism = 
  
    [
      {
        id: 1, 
        title:'Quaresma', 
        description: 'O Tempo da Quaresma é o período do ano litúrgico que antecede a Páscoa cristã, sendo celebrado por algumas igrejas cristãs, dentre as quais a Católica, a Ortodoxa, a Anglicana, a Luterana e algumas denominações Presbiterianas e Reformadas. ',
        date: 'quinta-feira , 6 de abril'
      },
      {
        id: 2, 
        title:'Páscoa', 
        description: 'a Páscoa ou Domingo da Ressurreição é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida no terceiro dia após sua crucificação no Calvário, conforme o relato do Novo Testamento. ',
        date: 'domingo , 9 de abril'
      },
      {
        id: 3, 
        title:'Páscoa', 
        description: 'a Páscoa ou Domingo da Ressurreição é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida no terceiro dia após sua crucificação no Calvário, conforme o relato do Novo Testamento. ',
        date: 'domingo , 9 de abril'
      },
      {
        id: 4, 
        title:'Páscoa', 
        description: 'a Páscoa ou Domingo da Ressurreição é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida no terceiro dia após sua crucificação no Calvário, conforme o relato do Novo Testamento. ',
        date: 'domingo , 9 de abril'
      }
    ]
  
  res.status(200).json( catechism )
}
