import AbstractObservableUseCase from '../../../core/domain/interactors/AbstractObservableUseCase';
import Products from '../entity/Products';
import {Observable} from 'rxjs';
import {inject, injectable} from 'inversify';
import ProductsRepositoryInterface from '../repository/ProductsRepositoryInterface';
import {tap} from 'rxjs/internal/operators';
import {PRODUCTS} from '../di';

@injectable()
export default class FetchProductsUseCase extends AbstractObservableUseCase<Products> {
    public productsRepository: ProductsRepositoryInterface;

    constructor(
        @inject(PRODUCTS.ProductsRepositoryInterface) productsRepository: ProductsRepositoryInterface,
    ) {
        super();
        this.productsRepository = productsRepository;
    }

    public createObservable(): Observable<Products> {
        return this.productsRepository.fetchProducts()
            .pipe(
                tap( (products: Products) => {
                    this.productsRepository.setProducts(products);
                }),
            );
    }

}
