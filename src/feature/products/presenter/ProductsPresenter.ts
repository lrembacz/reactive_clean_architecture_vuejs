import ProductsPresenterInterface from './ProductsPresenterInterface';
import ProductsViewInterface from '../view/ProductsViewInterface';
import GetProductsUseCase from '../interactors/GetProductsUseCase';
import ProductInterface from '../entity/ProductInterface';
import AbstractPresenter from '../../common/presenter/AbstractPresenter';
import GetProductsObserver from '../observer/GetProductsObserver';
import {inject, injectable} from 'inversify';
import {PRODUCTS} from '../di';
import SaveFetchedProductsUseCase from '../interactors/SaveFetchedProductsUseCase';
import SaveFetchedProductsObserver from '../observer/SaveFetchedProductsObserver';


@injectable()
export default class ProductsPresenter
    extends AbstractPresenter<ProductsViewInterface>
    implements ProductsPresenterInterface {

    public view: ProductsViewInterface;
    // private router: RouterInterface;
    private getProductsUseCase: GetProductsUseCase;
    private saveFetchedProductsUseCase: SaveFetchedProductsUseCase;

    constructor(
        @inject(PRODUCTS.GetProductsUseCase) getProductsUseCase: GetProductsUseCase,
        @inject(PRODUCTS.SaveFetchedProductsUseCase) saveFetchedProductsUseCase: SaveFetchedProductsUseCase,
    ) {
        super();
        // this.router = router;
        this.getProductsUseCase = getProductsUseCase;
        this.saveFetchedProductsUseCase = saveFetchedProductsUseCase;
    }

    public onInit(): void {
        this.getProductsUseCase.execute(
            new GetProductsObserver(this.view),
        );
        this.fetchProducts();
    }

    public fetchProducts(): void {
        this.view.displayLoading();

        setTimeout( () => {
            this.saveFetchedProductsUseCase.execute(
                new SaveFetchedProductsObserver(this.view),
            );
        }, 1000);
    }

    public onRefresh(): void {
        this.onInit();
    }

    public onProductSelected(product: ProductInterface): void {
        // this.router.openProductDetails(product);
    }

    public onDestroy() {
        this.getProductsUseCase.unsubscribe();
        this.saveFetchedProductsUseCase.unsubscribe();
    }
}
