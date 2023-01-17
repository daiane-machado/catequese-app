
import faunadb from 'faunadb';

export const faunaClient = new faunadb.Client({
  secret: "fnAE3y5qfGAAVqi2EPPhiYARUOnoJJDD_sY8z5O7",
  endpoint: 'https://db.fauna.com/',
});