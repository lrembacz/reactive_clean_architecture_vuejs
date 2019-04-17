import ProductsGatewayInterface from './ProductsGatewayInterface';
import {inject, injectable} from 'inversify';
import ApiClientInterface from '../../../architecture/apiClient/ApiClientInterface';
import StoreClientInterface from '../../../architecture/storeClient/StoreClientInterface';
import {AxiosResponse} from 'axios';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import Products from '../entity/Products';
import {SetProducts} from '../store/modules/products/actions';
import {PRODUCTS} from '../di';

@injectable()
export default class ProductsGateway implements ProductsGatewayInterface {
    protected api: ApiClientInterface;
    protected store: StoreClientInterface;

    constructor(
        @inject(PRODUCTS.ApiClientInterface) apiClient: ApiClientInterface,
        @inject(PRODUCTS.StoreClientInterface) storeClient: StoreClientInterface,
    ) {
        this.api = apiClient;
        this.store = storeClient;
    }

    public fetchProducts(): Observable<any[]> {
        return this.api.get<any>('/api/products.json')
            .pipe(
                map<AxiosResponse<any[]>, any[]>((products: AxiosResponse<any[]>) => {
                    console.log(products);
                    return products.data || [];
                }),
            );
    }

    public getProducts(): Observable<Products> {
        return this.store.get<Products>((state: any) => state.products.products);
    }

    public setProducts(products: Products): void {
        this.store.dispatch(new SetProducts(products));
    }
}
