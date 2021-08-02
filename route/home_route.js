import express from 'express'
import goHome from '../controller/home_controller.js'

const router = express.Router()

router.get('/', goHome.goHome)

export default router