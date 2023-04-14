import { getDB } from "./db.js"


const COL = 'friends'

export const makeFriends = async (req, res) => {
  console.log(req.body)
  const db = await getDB()
  const result = await db.collection(COL).insertOne(req.body)
  res.end()
}