import FarmersModel from '../../models/farmers.model';


class FarmerController {
  getAll(req, res, next) {
    const farmersModel = new FarmersModel();
    const {
      id,
      name,
    } = req.query;
    const searchParams = {
      id,
      name,
    }
    farmersModel.getFullFarmers(searchParams).then((farmers) => res.send(farmers));
  }
}

export default new FarmerController();
