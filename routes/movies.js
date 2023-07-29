const router = express.Router();
import express from "express";
import {
  getAllMovies,
  getmoviesByID,
  deleteBYID,
  addMovies,updateMovies
} from "../helper.js";

//REST API endpoints

//get all movies
router.get("/", async (req, res) => {
  //implementing search
  const { language, rating } = req.query;

  console.log(req.query, language);
  //copy by reference
  //if want to copy by value if we want to modify then copy by value

  //   let filteredMovies = movies;
  //   if (language) {
  //     filteredMovies = movies.find((mv) => mv.language == language);
  //   }
  //   if (rating) {
  //     filteredMovies = movies.find((mv) => mv.rating == rating);
  //   }
  ////const movie = movies.find((mv)=>mv.language==language)

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const movie = await getAllMovies(req);

  res.send(movie);
});

//get movie by id
router.get("/:id", async function (req, res) {
  const { id } = req.params;
  console.log(req.params, "ID=", id);
  //const movie = movies.find((mv)=>mv.id==id)

  //both db and collection name is movies
  const movie = await getmoviesByID(id);
  movie
    ? res.send(movie)
    : res.status(404).send({ message: "No movies found" });
});

//delete
router.delete("/:id", async function (req, res) {
  const { id } = req.params;

  const movie = await deleteBYID(id);
  res.send(movie);
});

//post

router.post("/", async function (req, res) {
  const newMovie = req.body;
  const result = await addMovies(newMovie);
  res.send(result);
});

//update movies
router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const updateMovie = req.body;
  const result = await updateMovies(id, updateMovie);
  res.send(result);
});
export const moviesRouter = router;
