import ProductsViewModelInterface from './ProductsViewModelInterface';
import GetProductsUseCase from '../interactors/GetProductsUseCase';
import AbstractViewModel from '../../../core/presentation/viewModel/AbstractViewModel';
import {inject, injectable} from 'inversify';
import {BehaviorSubject, Observable} from 'rxjs/index';
import Products from '../entity/Products';
import GetProductsObserver from '../observer/GetProductsObserver';
import SaveFetchedProductsObserver from '../observer/SaveFetchedProductsObserver';
import FetchProductsUseCase from '../interactors/FetchProductsUseCase';
import {PRODUCTS} from '../di';


@injectable()
export default class ProductsViewModel extends AbstractViewModel implements ProductsViewModelInterface {
    public getProductsUseCase: GetProductsUseCase;
    public fetchProductsUseCase: FetchProductsUseCase;

    public products: BehaviorSubject<Products> = new BehaviorSubject<Products>([]);

    constructor(
        @inject(PRODUCTS.GetProductsUseCase) getProductsUseCase: GetProductsUseCase,
        @inject(PRODUCTS.FetchProductsUseCase) fetchProductsUseCase: FetchProductsUseCase,
    ) {
        super();
        this.getProductsUseCase = getProductsUseCase;
        this.fetchProductsUseCase = fetchProductsUseCase;
    }

    public products$(): Observable<Products> {
        return this.products.asObservable();
    }

    public setProducts(products: Products): void {
        this.products.next(products);
    }

    public onInit(): void {
        this.getProductsUseCase.execute(
            new GetProductsObserver(this),
        );
        this.fetchProducts();
    }

    public fetchProducts(): void {
        this.setLoading(true);

        setTimeout( () => {
            this.fetchProductsUseCase.execute(
                new SaveFetchedProductsObserver(this),
            );
        }, 1000);
    }

    public onRefresh(): void {
        this.fetchProducts();
    }

    public dispose(): void {
        this.getProductsUseCase.unsubscribe();
        this.fetchProductsUseCase.unsubscribe();
    }
}
