import "dotenv/config"
import express from "express"
import morgan from 'morgan'
import indexRoutes from "./routes/index.routes.js"
import usersRoutes from "./routes/users.routes.js"
import loginRoutes from "./routes/login.routes.js"
import { connectDB } from "./utils/db.js"

const app = express()

// const prueba = async () => {
//    const sql = await connectDB()
//    const res = await sql.query("create table users(id int primary key, name varchar, age int)")
//    console.log(res.rows)
// }
// prueba()

app.use(morgan("dev"))
app.use(express.json())

app.use(indexRoutes)
app.use(usersRoutes)
app.use(loginRoutes)

const PORT = 8000
app.listen(PORT,console.log(`http://localhost:${PORT}`))