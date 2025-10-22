import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  await knex("course").insert({ name })

  response.status(201).json()
})

app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("course").select("*")
  response.status(201).json(courses)

})

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { name } = request.body

  await knex("course").update({ name }).where("id", request.params.id)

  response.status(201).json()
})

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params

  await knex("course").delete().where("id", id)
  response.status(201).json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
