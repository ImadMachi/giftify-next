// services/products.js
import axios from 'axios';

const API_URL = ' http://localhost:8000/api';

class ProductsService {

    static async getAllProducts() {
         try {
            const res = await axios.get(API_URL + '/products');
            return res.data;  }
        catch (err) {
            console.log(err);
        }
    }
}
export default ProductsService;


