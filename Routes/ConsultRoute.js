import express from "express"
import ConsultController from "../Controllers/ConsultController.js"

const routerConsult = express.Router()

routerConsult.get('/', ConsultController.getConsult)

export default routerConsult