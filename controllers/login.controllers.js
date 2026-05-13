import { connectDB } from "../utils/db.js"
const sql = await connectDB()

export const login = async (req, res) => {
    const {username, password} = req.body
    const texto = "select * from users where username = $1"
    const values = [username]
    const result = await sql.query(texto, values)
    if (result.rows.lenght < 1) {
        res.status[404].json[{login:false, user:{}}]
        return
    }
    
    if (result.rows[0].password === password) {
        res.status[200].json[{login:true, user:result.rows[0]}]
    }else{
        res.status[404].json[{login:false, user:{}}]
    }
}