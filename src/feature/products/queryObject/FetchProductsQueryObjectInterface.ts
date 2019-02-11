import QueryObjectInterface from '../../common/queryObject/QueryObjectInterface';
import ProductsGatewayInterface from '../gateway/ProductsGatewayInterface';
import {Observable} from 'rxjs/index';
import {AxiosResponse} from 'axios';
import Products from '../entity/Products';

export default interface FetchProductsQueryObjectInterface extends QueryObjectInterface {
    gateway: ProductsGatewayInterface;

    execute(): Observable<AxiosResponse<Products>>;
}
