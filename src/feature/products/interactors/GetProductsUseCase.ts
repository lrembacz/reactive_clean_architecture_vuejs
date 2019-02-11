import AbstractObservableUseCase from '../../common/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {Observable} from 'rxjs';
import ProductsStoreRepositoryInterface from '../repository/ProductsStoreRepositoryInterface';
import {inject, injectable} from 'inversify';
import {PRODUCTS} from '../di';

@injectable()
export default class GetProductsUseCase extends AbstractObservableUseCase<Products> {
    public storeRepository: ProductsStoreRepositoryInterface;

    constructor(
        @inject(PRODUCTS.ProductsStoreRepositoryInterface) storeRepository: ProductsStoreRepositoryInterface,
    ) {
        super();
        this.storeRepository = storeRepository;
    }

    public createObservable(): Observable<Products> {
        return this.storeRepository.getProducts();
    }

}
