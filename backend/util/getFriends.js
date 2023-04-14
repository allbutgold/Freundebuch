import { getDB } from "./db.js"


const COL = 'friends'

export const getFriends = async (req, res) => {
  console.log(req.headers)
  const db = await getDB()
  const docs = await db.collection(COL).find().toArray()
  console.log(docs)
  if (docs === null) res.end()
  else {
    res.json(docs)
  } 
}