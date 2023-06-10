import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => { // me gusta el guion bajo para ya marcar cada variable donde debe ir
  console.log('its alive')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`rompi algo en el puerto ${PORT}?`)
})
