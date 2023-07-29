import { client } from "./index.js";

export async function getAllMovies(req) {
  return await client
    .db("movies")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export async function getmoviesByID(id) {
  return await client.db("movies").collection("movies").findOne({ id: id });
}
export async function deleteBYID(id) {
  return await client.db("movies").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovie) {
  return await client.db("movies").collection("movies").insertMany(newMovie);
}
 export async function updateMovies(id,updateMovie) {
  return await client.db("movies").collection("movies").updateOne({id:id},{$set:updateMovie});
 }