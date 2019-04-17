import Products from '../entity/Products';
import {Observable} from 'rxjs/index';

interface ProductsRepositoryInterface {
    fetchProducts(): Observable<Products>;
    getProducts(): Observable<Products>;
    setProducts(products: Products): void;
}

export default ProductsRepositoryInterface;
