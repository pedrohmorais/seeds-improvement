import FarmersModel from '../../models/farmers.model';


class FarmerController {
  getAll(req, res, next) {
    const farmersModel = new FarmersModel();
    farmersModel.getFullFarmers().then((farmers) => res.send(farmers));
  }
}

export default new FarmerController();
