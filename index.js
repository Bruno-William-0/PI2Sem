
import express from 'express'
import ClientRouter from './Routes/ClientRoute.js';
import ConsultController from './Controllers/ConsultController.js';
import EmployerController from './Controllers/EmployerController.js';
import ConsultRouter from './Routes/ConsultRoute.js'

import PetRouter from './Routes/PetRoute.js';

const app = express();
app.use(express.json());

app.use('/client', ClientRouter)
app.use('/consult', ConsultRouter)

app.use('/pet', PetRouter)

app.listen(3000, () => console.log('API Rodando'))
