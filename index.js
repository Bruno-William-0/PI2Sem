import express from 'express'
import router from './Routes/ClientRoute.js'
import routerPet from './Routes/PetRoute.js';
import routerEmployer from './Routes/EmployerRoute.js';
import routerConsult from './Routes/ConsultRoute.js';

const app = express();
app.use(express.json());

app.use('/client', router);
app.use('/pet', routerPet)
app.use('/employer', routerEmployer)
app.use('/consult', routerConsult)

app.listen(3000, () => console.log('API Rodando'));
