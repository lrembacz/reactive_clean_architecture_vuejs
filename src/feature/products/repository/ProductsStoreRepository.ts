import ProductsStoreRepositoryInterface from './ProductsStoreRepositoryInterface';
import ProductsStoreGatewayInterface from '../gateway/ProductsStoreGatewayInterface';
import AbstractStoreRepository from '../../common/repository/AbstractStoreRepository';
import {Observable} from 'rxjs';
import Products from '../entity/Products';
import {inject, injectable} from 'inversify';
import {PRODUCTS} from '../di';
import {SetProducts} from '../store/modules/products/actions';

@injectable()
export default class ProductsStoreRepository
    extends AbstractStoreRepository
    implements ProductsStoreRepositoryInterface {
    public gateway: ProductsStoreGatewayInterface;

    constructor(
        @inject(PRODUCTS.ProductsStoreGatewayInterface) gateway: ProductsStoreGatewayInterface,
    ) {
        super();
        this.gateway = gateway;
    }

    public getProducts(): Observable<Products> {
        return this.gateway.stateAsObservable(
            (state: any) => {
                return state.products.products;
            },
        );
    }

    public setProducts(products: Products): void {
        this.gateway.dispatch(new SetProducts(products));
    }

}
