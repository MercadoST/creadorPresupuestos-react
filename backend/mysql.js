import mysql from 'mysql2';
import express from 'express'
import cors from 'cors'

const app = express()


const db = mysql.createConnection(
  {
    host: 'containers-us-west-160.railway.app',
    user: 'root',
    port: '6764',
    password: 'kscXyKZkduQKKDNJItz1',
    database: 'railway'
  }
)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json('Este es el backend')
})

app.get('/products/:id_categoria', (req, res) => {
  const id_categoria = req.params.id_categoria;
  const q = `SELECT * FROM products WHERE id_Category = ${id_categoria}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8800, () => {
  console.log('Conectado con el backend')
})