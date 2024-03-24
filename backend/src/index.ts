import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

let db = ['Água mole e pedra dura, quem avisa amigo é!']

app.get('/message', (req, res) => {
  res.send(db)
})

app.post('/response', (req, res) => {
  const text = req.body.text

  if (!text) { throw new Error('Texto não informado')}

  db.push(text) 

  res.send('Mensagem recebida com sucesso!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})