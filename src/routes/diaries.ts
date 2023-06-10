import express from 'express'
import * as diaryServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithOutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // es valido usar operadores unarios o sino algo tipo number() para convertir el parametro que viene como string a numero
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('Error desconocido')
    }
  }
})

export default router
