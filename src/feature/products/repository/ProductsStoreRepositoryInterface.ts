import StoreRepositoryInterface from '../../common/repository/StoreRepositoryInterface';
import ProductsStoreGatewayInterface from '../gateway/ProductsStoreGatewayInterface';
import Products from '../entity/Products';
import {Observable} from 'rxjs';

export default interface ProductsStoreRepositoryInterface extends StoreRepositoryInterface {
    gateway: ProductsStoreGatewayInterface;

    getProducts(): Observable<Products>;
    setProducts(products: Products): void;
}
