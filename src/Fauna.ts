
import faunadb from 'faunadb';

export const faunaClient = new faunadb.Client({
  secret: `${process.env.FAUNADB_SECRET}`,
  endpoint: process.env.FAUNA_URL,
});