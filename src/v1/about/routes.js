import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    res.send({title: 'The v1 Path for the CV API'})
})

export default router