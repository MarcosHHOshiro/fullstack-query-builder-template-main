import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("course").insert([
        { name: "C#" },
        { name: "Java" },
        { name: "Python" },
        { name: "React" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Batata" }
    ]);
};
