import { knex as kenxConfig } from "knex"
import config from "../../knexfile"

export const knex = kenxConfig(config)