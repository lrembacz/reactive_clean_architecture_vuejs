import Products from '../entity/Products';
import AbstractViewModelObserver from '../../../core/presentation/viewModel/AbstractViewModelObserver';
import ProductsViewModelInterface from '../viewModel/ProductsViewModelInterface';

export default class SaveFetchedProductsObserver
    extends AbstractViewModelObserver<Products, ProductsViewModelInterface> {
    protected viewModel: ProductsViewModelInterface;

    constructor(viewModel: ProductsViewModelInterface) {
        super();
        this.bind(viewModel);
    }

    public error(error?: Error): void {
        this.viewModel.error.next(error ? error.message : 'error');
    }

    public complete(): void {
        this.viewModel.loading.next(false);
    }

    public next(value: Products): void {
        // not implemented
    }

}
