import mysql from "mysql2/promise"

console.log('Conenct to pool...')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'book_collection_backend',
})

export default pool