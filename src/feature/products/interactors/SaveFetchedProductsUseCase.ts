import AbstractObservableUseCase from '../../common/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {Observable} from 'rxjs/index';
import {PRODUCTS} from '../di';
import ProductsStoreRepositoryInterface from '../repository/ProductsStoreRepositoryInterface';
import {inject, injectable} from 'inversify';
import FetchProductsUseCase from './FetchProductsUseCase';
import productsRawToEntityMapper from '../mapper/productsRawToEntityMapper';
import {map, tap} from 'rxjs/internal/operators';
import FetchProductsQueryObjectInterface from '../queryObject/FetchProductsQueryObjectInterface';
import {AxiosResponse} from 'axios';
import ProductInterface from '../entity/ProductInterface';

@injectable()
export default class SaveFetchedProductsUseCase extends AbstractObservableUseCase<Products> {
    public storeRepository: ProductsStoreRepositoryInterface;
    public fetchProductsQueryObject: FetchProductsQueryObjectInterface;

    constructor(
        @inject(PRODUCTS.ProductsStoreRepositoryInterface) storeRepository: ProductsStoreRepositoryInterface,
        @inject(PRODUCTS.FetchProductsQueryObjectInterface) fetchProductsQueryObject: FetchProductsQueryObjectInterface,
    ) {
        super();
        this.storeRepository = storeRepository;
        this.fetchProductsQueryObject = fetchProductsQueryObject;
    }

    public createObservable(): Observable<Products> {
        return this.fetchProductsQueryObject.execute()
            .pipe(
                map<AxiosResponse<Products>, Products>(productsRawToEntityMapper),
                tap( (prodcuts: Products) => {
                    this.storeRepository.setProducts(prodcuts);
                }),
            );
    }

}
