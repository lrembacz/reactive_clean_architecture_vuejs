import Products from '../entity/Products';
import AbstractViewModelObserver from '../../../core/presentation/viewModel/AbstractViewModelObserver';
import ProductsViewModelInterface from '../viewModel/ProductsViewModelInterface';

export default class GetProductsObserver extends AbstractViewModelObserver<Products, ProductsViewModelInterface> {
    protected viewModel: ProductsViewModelInterface;

    constructor(viewModel: ProductsViewModelInterface) {
        super();
        this.bind(viewModel);
    }

    public error(error?: Error): void {
        this.viewModel.error.next(error ? error.message : 'error');
    }

    public complete(): void {
        console.log('completed');
    }

    public next(value: Products): void {
        this.viewModel.products.next(value);
    }

}
