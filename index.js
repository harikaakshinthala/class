//const express = require('express')
import express from "express";
const app = express();
//const { MongoClient } = require('mongodb');
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";

dotenv.config();

const PORT = process.env.PORT || 9000;

// const movies =

//as we donot want to push the mongo link to git we use dotenv
//mongodb connection

//const MONGO_URL = "mongodb+srv://harika1999:<password>@cluster0.zwdaqlr.mongodb.net/?retryWrites=true&w=majority";
console.log(process.env.MONGO_URL);
console.log(process.env.PORT);

//mongo atlas connection
const MONGO_URL = process.env.MONGO_URL;
//const MONGO_URL= "mongodb://0.0.0.0:27017";
//mongodb://localhost
//mongodb://localhost:27017

//it may take some time to connect to mongo so we use async and await
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongodb is connected");
  return client;
}
export const client = await createConnection();
//  //middelware express.json so express understands data is in json
app.use(express.json());


app.get("/", function (req, res) {
  res.send("Ola all...u");
});

app.use("/movies",moviesRouter)

app.listen(PORT, () => console.log("server started on Port", PORT));


