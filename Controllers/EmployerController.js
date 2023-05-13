import { getEmployer } from "../Models/Employer.js"

class EmployerController{
    static getEmployer(req, res){
        res.json(getEmployer())
    }
}

export default EmployerController 