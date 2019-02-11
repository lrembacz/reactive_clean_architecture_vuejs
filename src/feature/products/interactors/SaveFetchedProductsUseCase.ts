import AbstractObservableUseCase from '../../common/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {Observable} from 'rxjs/index';
import {PRODUCTS} from '../di';
import ProductsStoreRepositoryInterface from '../repository/ProductsStoreRepositoryInterface';
import {inject, injectable} from 'inversify';
import FetchProductsUseCase from './FetchProductsUseCase';
import productsRawToEntityMapper from '../mapper/productsRawToEntityMapper';
import {map, tap} from 'rxjs/internal/operators';

@injectable()
export default class SaveFetchedProductsUseCase extends AbstractObservableUseCase<Products> {
    public storeRepository: ProductsStoreRepositoryInterface;
    public fetchProductsUseCase: FetchProductsUseCase;

    constructor(
        @inject(PRODUCTS.ProductsStoreRepositoryInterface) storeRepository: ProductsStoreRepositoryInterface,
        @inject(PRODUCTS.FetchProductsUseCase) fetchProductsUseCase: FetchProductsUseCase,
    ) {
        super();
        this.storeRepository = storeRepository;
        this.fetchProductsUseCase = fetchProductsUseCase;
        this.storeRepository.setProducts([]);
    }

    public createObservable(): Observable<Products> {
        return this.fetchProductsUseCase
            .createObservable()
            .pipe(
                map(productsRawToEntityMapper),
                tap( (prodcuts: Products) => {
                    this.storeRepository.setProducts(prodcuts);
                }),
            );
    }

}
