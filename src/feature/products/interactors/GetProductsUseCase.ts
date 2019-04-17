import AbstractObservableUseCase from '../../../core/domain/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {Observable} from 'rxjs';
import {inject, injectable} from 'inversify';
import ProductsRepositoryInterface from '../repository/ProductsRepositoryInterface';
import {PRODUCTS} from '../di';

@injectable()
export default class GetProductsUseCase extends AbstractObservableUseCase<Products> {
    public productsRepository: ProductsRepositoryInterface;

    constructor(
        @inject(PRODUCTS.ProductsRepositoryInterface) productsRepository: ProductsRepositoryInterface,
    ) {
        super();
        this.productsRepository = productsRepository;
    }

    public createObservable(): Observable<Products> {
        return this.productsRepository.getProducts();
    }

}
