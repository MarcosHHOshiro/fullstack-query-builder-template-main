import { table } from "console";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("course", (table) => {
        table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable("course", (table) => {
        table.dropColumn("updated_at");
    })
}

