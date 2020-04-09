import { successResponce, errorResponce } from '@utils/Exchange';

class Home {
  static async index(req, res, next) {
    return successResponce(req, res, "Reached Home Page", 202, {});
  }
}

export default Home;