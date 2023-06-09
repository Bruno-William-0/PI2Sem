
import express from 'express'
import cors from 'cors'
import ClientRouter from './Routes/ClientRoute.js';
// import ConsultController from './Controllers/ConsultController.js';
// import EmployerController from './Controllers/EmployerController.js';
import ConsultRouter from './Routes/ConsultRoute.js'
import EmployerRouter from './Routes/EmployerRoute.js'
import PetRouter from './Routes/PetRoute.js';


const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.use('/client', ClientRouter)
app.use('/consult', ConsultRouter)
app.use('/employer', EmployerRouter)
app.use('/pet', PetRouter)

app.listen(3000, () => console.log('API Rodando'))

