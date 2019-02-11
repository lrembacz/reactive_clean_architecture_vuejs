import FetchProductsQueryObjectInterface from './FetchProductsQueryObjectInterface';
import ProductsGatewayInterface from '../gateway/ProductsGatewayInterface';
import {Observable} from 'rxjs/index';
import {AxiosResponse} from 'axios';
import {inject, injectable} from 'inversify';
import {PRODUCTS} from '../di';
import Products from '../entity/Products';

@injectable()
export default class FetchProductsQueryObject implements FetchProductsQueryObjectInterface {
    public gateway: ProductsGatewayInterface;

    constructor(
        @inject(PRODUCTS.ProductsGatewayInterface) gateway: ProductsGatewayInterface,
    ) {
        this.gateway = gateway;
    }

    public execute(): Observable<AxiosResponse<Products>> {
        return this.gateway.get('/api/products.json');
    }

}
