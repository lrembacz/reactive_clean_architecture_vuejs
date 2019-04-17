import {Observable} from 'rxjs/index';
import Products from '../entity/Products';

interface ProductsGatewayInterface {
    fetchProducts(): Observable<any[]>;
    getProducts(): Observable<Products>;
    setProducts(products: Products): void;
}

export default ProductsGatewayInterface;
