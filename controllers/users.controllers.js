import { connectDB } from "../utils/db.js"
import {hash} from "../utils/hash.js"

export const getUsers = async (req, res) => {
    const sql = await connectDB()
    const texto = "select * from users"
    const result = await sql.query(texto)
    res.json(result.rows)
}
export const getUser = async (req, res) => {
    const id = req.param.id
    const texto = "select * from users where id=$1"
    const values = [id]
    const result = await sql.query(texto, values)
    res.json(result.rows)
}
export const postUser = async (req, res) => {
    const {name, username, password, points} = req.body
    const texto = "insert into users (name, username, password, points) values (1, Andrea, Andy, sam, 50) returning *"
    const values = [id]
    const result = await sql.query(texto, values)
    res.json(result.rows)
}
export const putUser =async (req, res) => {
    const id = req.param.id
    const {name, username, password, points} = req.body
    const texto = "update users set name=$1, username=$2, password=$3, points=$4 where id = $5 returning *"
    const values = [name, username, password, points]
    const result = await sql.query(texto, values)
    res.json(result.rows)
}
export const deleteUser = async (req, res) => {
    const id = req.param.id
    const texto = "delete from users where id = $1 returning *"
    const values = [id]
    const result = await sql.query(texto, values)
    res.json(result.rows)
}